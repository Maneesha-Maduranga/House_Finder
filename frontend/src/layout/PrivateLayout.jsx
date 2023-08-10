import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateLayout() {
  const { user } = useSelector((state) => state.user);

  return user ? <Outlet /> : <Navigate to='/signin' replace={true} />;
}

export default PrivateLayout;
