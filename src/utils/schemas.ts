import * as yup from 'yup';

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const registerSchema = yup.object().shape({
  fullname: yup.string().required('Vui lòng nhập họ và tên'),
  email: yup.string().required('Vui lòng nhập email').email('Email không hợp lệ'),
  phone: yup.string().required('Vui lòng nhập số điện thoại').matches(phoneRegExp, 'Không đúng định dạng'),
  project: yup.object().required('Vui lòng chọn 1 dự án').nullable(),
});

export const schemaSearchForm = yup.object({
  search: yup.string(),
});

export default registerSchema;
