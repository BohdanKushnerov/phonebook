import ContactForm from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { useTheme } from '@mui/material/styles';
import { Overlay } from './Modal.styled';

// import PropTypes from 'prop-types';
// import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ id, name, number, onClose }) {
  // const [first, setfirst] = useState(second);

  // const theme = useTheme();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <h1>Edit contact</h1>
      <ContactForm
        name={name}
        number={number}
        isChangeContact={true}
        id={id}
        onClose={onClose}
      />
    </Overlay>,
    modalRoot
  );
}

// Modal.propTypes = {
//   img: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
