import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import Modal from '.';

export default {
  title: 'Components/organisms/Modal',
  component: Modal,
  argTypes: {
    iconClose: {
      control: {
        type: 'select',
        options: ['closeGray', 'close'],
        defaultValue: 'closeGray',
      },
    },
  },
} as Meta;

export const Normal: Story = ({ iconClose }) => {
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
      <Modal
        isOpen={isOpen}
        iconName={iconClose}
        modifiers="notify"
        handleClose={() => setIsOpen(false)}
      >
        <div style={{
          color: '#000',
        }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
        </div>
      </Modal>
    </div>
  );
};
