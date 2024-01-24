import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ isOpen, onClose }: ILoginModalProps) => {
  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      lazy
    >
      <Suspense fallback={ <Loader /> }>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
