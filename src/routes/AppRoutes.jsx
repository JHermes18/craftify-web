import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '@/components/layouts/HomeLayout';
import PageNotFound from '@/pages/PageNotFound';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import ViewProductPage from '@/pages/ViewProductPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ProfilePage from '@/pages/ProfilePage';
import ChangePasswordPage from '@/pages/ChangePasswordPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';

const AppRoutes = createBrowserRouter([
  {
    path: '*',
    element: <PageNotFound />,
  },
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductPage />,
      },
      {
        path: 'products/:id',
        element: <ViewProductPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'change-password',
        element: <ChangePasswordPage />,
      },
    ],
  },
]);

export default AppRoutes;
