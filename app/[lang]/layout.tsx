import '../../styles/globals.scss'
import React from "react";
import { i18n } from '@/i18n-config'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}


interface RootLayoutInterface {
    children : React.ReactNode;
    params : {lang :string};
}

export default function RootLayout({children , params :{lang}}: RootLayoutInterface) {
  return (
    <html lang={lang}>
      <body>
      <header>
          header
      </header>

      <main>
          {children}
      </main>
      <footer>
          footer
      </footer>

      </body>
    </html>
  )
}
