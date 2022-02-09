import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import NotifyModal from '.';

export default {
  title: 'Components/organisms/NotifyModal',
  component: NotifyModal,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'error'],
      },
      defaultValue: 'success',
    },
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Đăng ký thành công',
    },
    message: {
      control: {
        type: 'text',
      },
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In morbi vulputate dolor arcu, ultrices proin cursus. Sagittis tortor sed aliquam.',
    },
  },
} as Meta;

export const Normal: Story = ({
  type,
  title,
  message,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        height: '100vh',
        background: '#000',
      }}
    >
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <NotifyModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        type={type}
        title={title}
        message={message}
        btnText="Đóng"
      />
    </div>
  );
};
