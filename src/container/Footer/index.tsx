import { yupResolver } from '@hookform/resolvers/yup';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';

import Footer, { FooterRegisterFormTypes, SocialListTypes } from 'components/organisms/Footer';
import NotifyModal, { NotifyType } from 'components/organisms/NotifyModal';
import submitContactService from 'services/contact';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getProjectsAction } from 'store/project';
import { getSystemAsync } from 'store/system';
import { getImageURL } from 'utils/functions';
import registerSchema from 'utils/schemas';

type NotifyContact = {
  isOpen: boolean;
  type?: NotifyType;
  title?: string;
  message?: string;
};

interface FooterContainerProps {
}

const FooterContainer: React.FC<FooterContainerProps> = () => {
  const [loading, setLoading] = useState(false);
  const [isNotify, setIsNotify] = useState<NotifyContact>({
    isOpen: false,
  });
  const { dataSystem } = useAppSelector((state) => state.system);
  const menuList = useAppSelector((state) => state.menus.groupedFooter);
  const { projectData } = useAppSelector((state) => state.project);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const dispatch = useAppDispatch();

  const method = useForm<FooterRegisterFormTypes>({
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: {
      phone: '',
      fullname: '',
      email: '',
      project: undefined,
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
        setIsNotify({
          isOpen: true,
          type: 'success',
          title: 'Gửi liên hệ thành công',
          message: 'Quý khách đã gửi đăng ký thành công. Xin cảm ơn',
        });
      } catch (error) {
        setIsNotify({
          isOpen: true,
          type: 'error',
          title: 'Gửi đăng ký thất bại',
          message: 'Vui lòng thử lại',
        });
      } finally {
        setLoading(false);
      }
    }, [executeRecaptcha, method],
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

  useEffect(() => {
    dispatch(getSystemAsync());
    if (!projectData) {
      dispatch(getProjectsAction({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        isOpen={isNotify.isOpen}
        handleClose={() => setIsNotify({ isOpen: false, type: 'none' })}
        type={isNotify.type}
        title={isNotify.title}
        message={isNotify.message}
        btnText="Đóng"
      />
    </>
  );
};

export default FooterContainer;
