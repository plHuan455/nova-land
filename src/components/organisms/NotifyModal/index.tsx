import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import Modal from 'components/organisms/Modal';

export type NotifyType = 'success' | 'error' | 'none';

interface NotifyModalProps {
  isOpen?: boolean;
  handleClose: () => void;
  type?: NotifyType;
  title?: string;
  message?: string;
  btnText?: string;
  subBtnText?: string;
  handleConfirm?: () => void;
  handleSubBtn?: () => void;
}

const NotifyModal: React.FC<NotifyModalProps> = ({
  isOpen = false,
  handleClose,
  type = 'success',
  title,
  message,
  btnText = 'Ok',
  handleConfirm,
  subBtnText,
  handleSubBtn,
}) => (
  <Modal
    isOpen={isOpen}
    modifiers="notify"
    handleClose={handleClose}
    sizeIconClose="14"
  >
    <div className="o-notify_main">
      <div className="o-notify_wrapper">
        <div className="o-notify_head">
          <div className="o-notify_icon">
            <Icon iconName={type === 'success' ? 'greenSuccess' : 'redError'} size="24" />
          </div>
          {title && (
          <Heading
            type="h3"
            modifiers={['16x24', '700', 'black085']}
            content={title}
          />
          )}
        </div>

        {message && (
          <div className="o-notify_message">
            <Text modifiers={['black085', '400']} content={message} />
          </div>
        )}
        <div className="o-notify_btn">
          {subBtnText && (
            <Button
              onClick={() => {
                handleClose();
                if (handleSubBtn) handleSubBtn();
              }}
            >
              {subBtnText}
            </Button>
          )}
          <Button
            onClick={() => {
              handleClose();
              if (handleConfirm) handleConfirm();
            }}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  </Modal>
);
NotifyModal.defaultProps = {
  isOpen: false,
  type: 'success',
  title: '',
  message: '',
  btnText: 'Ok',
  handleConfirm: undefined,
  subBtnText: '',
  handleSubBtn: undefined,
};

export default NotifyModal;
