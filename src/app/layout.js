// src/app/layout.js

import './globals.css';
import NavigationBar from '../components/NavigationBar';
import AuthListener from '../components/AuthListener';
import { Providers } from '../providers';

export const metadata = {
  title: 'Audiask',
  description: 'Your application description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthListener />
          <NavigationBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}