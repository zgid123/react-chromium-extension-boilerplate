import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Overview } from '~/popup/pages/Overview';
import { MainLayout } from '~/popup/layouts/MainLayout';

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Overview />} />
      </Route>
    </Route>,
  ),
);

export function App() {
  return <RouterProvider router={router} />;
}
