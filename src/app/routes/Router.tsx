import { AdminRoutes } from './admin.routes';
import { AppRoutes } from './app.routes';

export default () => {
  const isAdmin = true;

  return isAdmin ? <AdminRoutes /> : <AppRoutes />;
};
