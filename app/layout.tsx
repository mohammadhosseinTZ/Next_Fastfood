import { Header } from "./components";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import CartReducerContext from "./components/context/CartReducerContext";


const montserrat = Montserrat({
  subsets: ['latin'],
})
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body >
        <CartReducerContext>
          <Header />
          {modal}
          {children}
        </CartReducerContext>
      </body>
    </html>
  );
}
