import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
      <LoginForm />
    </Modal>
  );
};
