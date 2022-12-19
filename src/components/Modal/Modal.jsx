import { Backdrop, Modal, ImageComp, CloseBtn } from './Modal.styled';
import PropTypes from 'prop-types';

export const ModalWindow = ({ largeImgUrl, onImageClick }) => {
  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onImageClick('');
    }
  };
  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      onImageClick('');
    }
  });
  return (
    <Backdrop onClick={handleBackdrop}>
      <Modal>
        <ImageComp src={largeImgUrl} alt="image" />
        <CloseBtn type="button" onClick={() => onImageClick('')}>
          X
        </CloseBtn>
      </Modal>
    </Backdrop>
  );
};

ModalWindow.propTypes = {
  largeImgUrl: PropTypes.string,
  onImageClick: PropTypes.func,
};
