/* eslint-disable react/destructuring-assignment */
import React, {
  forwardRef, useImperativeHandle, useMemo, useRef, useState,
} from 'react';
import { Controller, get, useFormContext } from 'react-hook-form';
import Select, {
  components,
  GroupedOptionsType,
  OptionsType,
  Props as SelectProps,
  ValueType,
} from 'react-select';

import iconArrowDown2 from 'assets/icons/ic_arrow_down_small.svg';
import iconArrowDown from 'assets/icons/ic_carret_down.svg';
import { useDerivedStateFromProps } from 'helpers/react-hook';
import mapModifiers from 'utils/functions';

export interface DropDownReference {
  reset: () => void;
}
export type OptionType = {
  value: string,
  label: string
}
export interface PulldownProps extends SelectProps {
  options: OptionsType<any> | GroupedOptionsType<any>;
  handleChange?: (value: ValueType<OptionType, false>) => void;
  error?: string;
  register?: React.MutableRefObject<DropDownReference | null> | null;
  isSecondary?: boolean;
}

const PulldownRef: React.ForwardRefRenderFunction<HTMLDivElement, PulldownProps> = ({
  children,
  options,
  handleChange,
  error,
  register,
  isSecondary,
  ...innerProps
}, ref) => {
  const selectRef = useRef<Select>(null);
  const [selectedOption] = useState<OptionType | null>(null);

  useImperativeHandle(
    register,
    () => ({
      reset: () => {
        const reactSelect = selectRef.current;
        if (reactSelect) {
          reactSelect.select?.clearValue();
        }
      },
    }),
    [],
  );
  const CaretDownIcon = ({ menuIsOpen }: any) => (
    <img
      src={isSecondary ? iconArrowDown2 : iconArrowDown}
      alt="icon-arrow"
      style={{
        transform: menuIsOpen && 'rotate(180deg)',
        transition: 'all 0.3s ease',
      }}
    />
  );

  const DropdownIndicator = (props: any) => {
    const { selectProps, isDisabled } = props;
    const { menuIsOpen } = selectProps;
    if (isDisabled) {
      return null;
    }
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <components.DropdownIndicator {...props}>
        <CaretDownIcon {...{ menuIsOpen }} />
      </components.DropdownIndicator>
    );
  };
  const renderBorder = useMemo(() => (error ? '#ce3100' : '#D9D9D9'), [error]);
  return (
    <div className="m-pulldown">
      <Select
        className="m-pulldown"
        classNamePrefix={mapModifiers('m-pulldown', 'default')}
        menuPlacement="auto"
        ref={selectRef}
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...innerProps}
        styles={{
          singleValue: (base: any) => ({
            ...base,
            color: error ? '#d73b37' : '#262626',
          }),
          control: (base: any, state) => ({
            ...base,
            height: 48,
            paddingLeft: 20,
            paddingRight: 10,
            color: '#002137',
            fontSize: 16,
            boxShadow: isSecondary ? '0px 2px 0px rgba(0, 0, 0, 0.016)' : 'none',
            borderWidth: 1,
            borderColor: state.isDisabled ? '#efefef' : renderBorder,
            '&:hover': {
              borderColor: error ? '#d73b37' : '#DFE6E8',
            },
            borderRadius: 2,
            cursor: 'pointer',
            backgroundColor: state.isDisabled ? '#efefef' : '#fff',
          }),
          placeholder: (base: any) => ({
            ...base,
            fontSize: 16,
            color: isSecondary ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.25)',
          }),
          valueContainer: (base: any) => ({
            ...base,
            paddingLeft: 0,
            paddingRight: 0,
          }),
          option: (base: any, state) => ({
            ...base,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            color: state.isSelected ? '#FFFFFF' : '#002137',
            backgroundColor: state.isSelected ? '#A26829' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(162, 104, 41, 0.2)',
            },
          }),
          menuList: (provided: any) => ({
            ...provided,
            paddingTop: 5,
            paddingBottom: 5,
            fontSize: 16,
            color: '#002B60',
            backgroundColor: '#fff',
            borderRadius: 4,
            '::-webkit-scrollbar': {
              width: 4,
            },
            '::-webkit-scrollbar-track': {
              background: '#FFFFFF',
            },
            '::-webkit-scrollbar-thumb': {
              background: '#002B60',
              borderRadius: 20,
            },
          }),
          dropdownIndicator: (provided: any) => ({
            ...provided,
            transition: 'all .3s ease',
            padding: '0',
          }),
        }}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
        inputRef={ref}
      />
      {error && <span className="m-pulldown_error">{error}</span>}
    </div>
  );
};
interface PulldownHookFormProps extends PulldownProps {
  name: string;
}
export const PulldownHookForm: React.FC<PulldownHookFormProps> = (props) => {
  const { formState, control, getValues } = useFormContext();
  const dropdownRef = useRef<DropDownReference | null>(null);

  const hasError: Record<string, string> = get(formState.errors, `${props.name}`);

  useDerivedStateFromProps((prevValue, currentValue) => {
    if (typeof currentValue === 'undefined' && currentValue !== prevValue) {
      dropdownRef.current?.reset();
    }
  }, getValues(props.name));

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value }, ...innerProps }) => (
        <Pulldown
          value={value}
          register={dropdownRef}
          handleChange={onChange}
          error={hasError && hasError.message}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...props}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...innerProps}
        />
      )}
    />
  );
};

const Pulldown = forwardRef(PulldownRef);
Pulldown.defaultProps = {
};

export default Pulldown;
