import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {

  const isAuthenticated = localStorage.getItem('user') !== null;
  
  return (
    <div className='bg-[#101010] min-h-screen overflow-auto'>
      {isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />}
    </div>
  );
}

export default ProtectedRoute;