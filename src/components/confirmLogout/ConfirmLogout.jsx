import { useDispatch, useSelector } from 'react-redux';
import { apiLogout } from '../../redux/auth/operations';
import Modal from 'react-modal';
import { closeModal } from '../../redux/modal/slice';
import { selectModalOpen } from '../../redux/modal/selectors';
import css from './ConfirmLogout.module.css';
const ConfirmLogout = () => {
  Modal.setAppElement('#root');

  const customStyles = {
    overlay: {
      backgroundColor: ' rgb(0, 0, 0, .8)',
    },
    content: {
      width: '60%',
      height: '20%',
      overflow: 'hidden',
    },
  };

  const showModal = useSelector(selectModalOpen);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  const onLogOut = () => {
    dispatch(apiLogout());
    onCloseModal();
  };

  return (
    <Modal
      isOpen={showModal}
      style={customStyles}
      onRequestClose={() => onCloseModal()}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={css.wrapper}>
        <p className={css.text}>Are you sure you want to log out?</p>
        <ul className={css.btnList}>
          <li>
            <button className={css.btn} onClick={onLogOut}>
              Confirm
            </button>
          </li>
          <li>
            <button className={css.btn} onClick={onCloseModal}>
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default ConfirmLogout;
