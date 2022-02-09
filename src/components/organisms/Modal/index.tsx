import React from 'react';
import Modal from 'react-modal';

import Icon, { IconName, IconSize } from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

interface Props {
  isOpen: boolean;
  handleClose?: () => void;
  isShowCloseButton?: boolean;
  modifiers?: 'notify'; // add more modifiers
  iconName?: IconName;
  sizeIconClose?: IconSize;
}

const CustomModal: React.FC<Props> = ({
  isOpen,
  children,
  modifiers,
  iconName,
  isShowCloseButton,
  handleClose,
  sizeIconClose,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={handleClose}
    closeTimeoutMS={250}
    className={`${mapModifiers('o-modal', modifiers)}`}
    appElement={document.getElementById('root') as HTMLElement}
    ariaHideApp={false}
    portalClassName={mapModifiers('o-modal_portal', isOpen && 'open')}
  >
    <div className="o-modal_main">
      <div className="o-modal_wrapper">
        {isShowCloseButton && (
          <button type="button" className="o-modal_close" onClick={handleClose}>
            <Icon iconName={iconName || 'blackSmallClose'} size={sizeIconClose} />
          </button>
        )}
        <div className="o-modal_body">{children}</div>
      </div>
    </div>
  </Modal>
);

CustomModal.defaultProps = {
  handleClose: undefined,
  isShowCloseButton: true,
  modifiers: undefined,
  iconName: 'blackSmallClose',
  sizeIconClose: '20',
};

export default CustomModal;
