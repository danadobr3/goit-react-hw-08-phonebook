import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'slice/auth/selectors';
import { logOutThunk } from 'slice/auth/thunk';

import cssusermenu from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className={cssusermenu.logout}>
      <p className={cssusermenu.user_email}>{user.email}</p>
      <button className={cssusermenu.btn_logout} onClick={handleLogOut} type="button">
        Logout
      </button>
    </div>
  );
};