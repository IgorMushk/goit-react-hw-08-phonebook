import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Footer, FooterText } from './Layout.styled';

export const Layout = () => {
  return (
    // <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
    <>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <Footer>
        <FooterText>
          &copy; {new Date().getFullYear()} Phonebook manager
        </FooterText>
      </Footer>
    </>
    // </div>
  );
};
