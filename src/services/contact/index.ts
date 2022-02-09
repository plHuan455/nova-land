import { ContactFormType } from './types';

import axiosInstance from 'services/common/instance';

const submitContactService = async (
  params: ContactFormType,
): Promise<void> => {
  const formData = new FormData();
  formData.append('name', params.name);
  formData.append('email', params.email);
  formData.append('phone', params.phone);
  if (params.projects_id) {
    formData.append('projects_id', params.projects_id);
  }
  if (params.grecaptcha_token) { formData.append('grecaptcha_token', params.grecaptcha_token); }
  await axiosInstance.post('contacts', formData);
};

export default submitContactService;
