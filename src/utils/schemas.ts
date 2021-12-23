import * as yup from 'yup';

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const registerSchema = yup.object().shape({
  fullname: yup.string().required('Vui lòng nhập họ và tên'),
  email: yup.string().required('Vui lòng nhập email').email('Email không hợp lệ'),
  phone: yup.string().required('Vui lòng nhập số điện thoại').matches(phoneRegExp, 'Không đúng định dạng'),
});
export default registerSchema;
