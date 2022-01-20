import { FooterRegisterFormTypes } from 'components/organisms/Footer';
import axiosInstance from 'services/common/instance';

export const submitContactService = async (
  params: FooterRegisterFormTypes,
  grecaptchaToken: string,
): Promise<void> => {
  const formData = new FormData();
  formData.append('grecaptcha_token', grecaptchaToken);
  formData.append('name', params.fullname);
  formData.append('email', params.email);
  formData.append('phone', params.phone);
  formData.append('projects_id', params.project);
  await axiosInstance.post('contacts', formData);
};

export default submitContactService;
