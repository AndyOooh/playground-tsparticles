import './styles/globals.scss';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Header />
        <main className='main main-h-min'>{children}</main>
      </body>
    </html>
  );
}
