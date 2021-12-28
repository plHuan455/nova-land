/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

export interface FormInterface<T> {
  method?: UseFormReturn<T>;
  submitForm?: SubmitHandler<T>;
}

class Form<T> extends React.Component<FormInterface<T>> {
  render() {
    const { method, submitForm = () => {}, children } = this.props;

    return (
      <div className="o-form">
        {
          method ? (
            <FormProvider {...method}>
              <form onSubmit={method.handleSubmit(submitForm)} noValidate>
                {children}
              </form>
            </FormProvider>
          ) : children
        }
      </div>
    );
  }
}

export default Form;
