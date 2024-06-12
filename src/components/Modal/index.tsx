import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '../../UI';
import { observer } from 'mobx-react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  closeButton?: boolean;
  centered?: boolean;
}

function CustomModal(props: CustomModalProps) {
  const { isOpen, onClose, header, body, footer, closeButton, centered } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={centered}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        {closeButton && <ModalCloseButton />}
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default observer(CustomModal);
