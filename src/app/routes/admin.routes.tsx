import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from '@app/layouts/Admin';
import { DashboardPage } from 'src/profiles/admin/pages/DashboardPage';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="obras" element={<h1>Obras</h1>} />
        <Route path="upload" element={<h1>Upload</h1>} />
        <Route path="category" element={<h1>Categories</h1>} />
        <Route path="users" element={<h1>Users</h1>} />
        <Route path="config" element={<h1>Config</h1>} />
      </Route>
    </Routes>
  );
};
