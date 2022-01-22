import { Story, Meta } from '@storybook/react';
import React, { useCallback, ChangeEvent } from 'react';

import FilterGroup from '.';

export default {
  title: 'Components/organisms/FilterGroup',
  component: FilterGroup,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const handleOnChange = useCallback((
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const idChecked:any = [];
    if (e.target.checked) {
      idChecked.push(e.target.id);
    } else {
      idChecked.splice(idChecked.indexOf(e.target.id), 1);
    }
    // eslint-disable-next-line no-console
    console.log(idChecked);
  }, []);

  return (
    <div style={{ maxWidth: '240px', marginLeft: '30px' }}>
      <FilterGroup
        title="Bộ phận"
        dataFilterGroup={[
          {
            id: '1',
            name: 'tatca',
            content: 'Tất cả',
          },
          {
            id: '2',
            name: 'kythuat',
            content: 'Kỹ thuật',
          },
          {
            id: '3',
            name: 'kehoachduan',
            content: 'Kế hoạch Dự án',
          },
          {
            id: '4',
            name: 'thietke',
            content: 'Thiết kế',
          },
          {
            id: '5',
            name: 'kinhdoanh&banhang',
            content: 'Kinh doanh & Bán hàng',
          },
          {
            id: '6',
            name: 'marketing',
            content: 'Marketing',
          },
        ]}
        handleOnChange={handleOnChange}
      />
    </div>
  );
};
