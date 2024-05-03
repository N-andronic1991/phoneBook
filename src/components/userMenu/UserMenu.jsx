import { useDispatch, useSelector } from 'react-redux';
import { selectName } from '../../redux/auth/selectors';
import { selectModalOpen } from '../../redux/modal/selectors';
import { openModal } from '../../redux/modal/slice';
import ConfirmLogout from '../confirmLogout/ConfirmLogout';
import css from './userMenu.module.css';

const UserMenu = () => {
  const userName = useSelector(selectName);
  const isModalOpen = useSelector(selectModalOpen);
  const dispatch = useDispatch();
  const onOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <div className={css.wrapper}>
        <p className={css.username}>Welcome, {userName} </p>
        <button onClick={onOpenModal} type="button">
          LogOut
        </button>
      </div>
      {isModalOpen && <ConfirmLogout />}
    </>
  );
};

export default UserMenu;
