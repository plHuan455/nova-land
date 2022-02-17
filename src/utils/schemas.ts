import * as yup from 'yup';

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const schemaSearchForm = yup.object({
  search: yup.string(),
});
