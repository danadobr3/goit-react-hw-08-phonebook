import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';

import csslayout from './Layout.module.css';


const Layout = () => {
  return (
    <div>
      <AppBar />
      <main className={csslayout.main_layout}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;