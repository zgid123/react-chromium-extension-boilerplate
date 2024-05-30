import { clsx } from 'clsx';
import { Outlet } from 'react-router-dom';

export function MainLayout(): JSX.Element {
  return (
    <div
      className={clsx(
        'main-layout-container',
        'min-w-[500px] min-h-[600px] bg-darkStealBlue-500 text-white',
      )}
    >
      <Outlet />
    </div>
  );
}
