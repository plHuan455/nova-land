import { yupResolver } from '@hookform/resolvers/yup';
import React, {
  useCallback, useMemo,
  useState,
} from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Footer, { FooterRegisterFormTypes, SocialListTypes } from 'components/organisms/Footer';
import NotifyModal, { NotifyType } from 'components/organisms/NotifyModal';
import submitContactService from 'services/contact';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setMessageNotify } from 'store/system';
import { getImageURL } from 'utils/functions';
import registerSchema from 'utils/schemas';

interface FooterContainerProps {
}

const FooterContainer: React.FC<FooterContainerProps> = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { dataSystem } = useAppSelector((state) => state.system);
  const menuList = useAppSelector((state) => state.menus.groupedFooter);
  const { projectData } = useAppSelector((state) => state.project);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { messageNotify } = useAppSelector((state) => state.system);

  const dispatch = useAppDispatch();

  const method = useForm<FooterRegisterFormTypes>({
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: {
      phone: '',
      fullname: '',
      email: '',
      project: null,
    },
  });

  const handleSubmit = useCallback(
    async (data: FooterRegisterFormTypes) => {
      if (!executeRecaptcha) return;
      try {
        setLoading(true);
        const tokenRecaptcha = await executeRecaptcha('submit');
        await submitContactService({
          name: data.fullname,
          phone: data.phone,
          email: data.email,
          projects_id: data.project?.value,
          grecaptcha_token: tokenRecaptcha,
        });
        method.reset();
        dispatch(setMessageNotify({
          isOpen: true,
          type: 'success',
          title: t('notify.sent_successfully'),
          message: t('notify.thank_you'),
        }));
      } catch (error) {
        dispatch(setMessageNotify({
          isOpen: true,
          type: 'error',
          title: t('notify.sent_failed'),
          message: t('notify.please_check'),
        }));
      } finally {
        setLoading(false);
      }
    },
    [dispatch, executeRecaptcha, method],
  );

  const socialLink: SocialListTypes[] | undefined = useMemo(
    () => dataSystem?.header.social?.map((val) => ({
      iconName: val.icon,
      url: val.link?.url,
      target: val.link?.target,
    })),
    [dataSystem],
  );

  const projectOptionData = useMemo(
    () => projectData?.map((item) => ({
      value: String(item.id),
      label: item.name,
    })),
    [projectData],
  );

  return (
    <>
      <Footer
        imgLogo={getImageURL(dataSystem?.footer.logoFooter)}
        projectOptions={projectOptionData || []}
        footerLink={menuList}
        method={method}
        submitForm={handleSubmit}
        externalPolicyLink={{
          namePolicy: dataSystem?.footer.policy.text,
          policyLink: dataSystem?.footer.policy.url,
          target: dataSystem?.footer.policy.target,
        }}
        externalPrivacyLink={{
          namePrivacy: dataSystem?.footer.terms.text,
          privacyLink: dataSystem?.footer.terms.url,
          target: dataSystem?.footer.terms.target,
        }}
        copyright={dataSystem?.footer.copyright}
        title={dataSystem?.footer.title}
        description={dataSystem?.footer.description}
        email={dataSystem?.header.email}
        phoneCskh={dataSystem?.header.phoneCskh}
        socialList={socialLink}
        loadingBtn={loading}
      />
      <NotifyModal
        isOpen={messageNotify.isOpen}
        handleClose={() => dispatch(setMessageNotify({
          ...messageNotify,
          isOpen: false,
        }))}
        type={messageNotify.type as NotifyType}
        title={messageNotify.title}
        message={messageNotify.message}
        btnText={t('notify.close')}
      />
    </>
  );
};

export default FooterContainer;
