import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../styles/globals.css';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  <Footer year={2025} />
  </>
);
