import './globals.scss'
import React from "react";
import FooterWrapper from "@/components/footer/FooterWrapper";
import MainWrapper from "@/components/main/MainWrapper";
import HeaderWrapper from "@/components/header/HeaderWrapper";
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import NavigationWrapper from "@/components/navigation/NavigationWrapper";


export const metadata = {
    title: '',
    description: '',
}


interface RootLayoutInterface {
    children: React.ReactNode;
    params: { locale };
}

const RootLayout = async ({children, params: {locale}}: RootLayoutInterface) => {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <HeaderWrapper/>
            <NavigationWrapper/>
            <MainWrapper>
                {children}
            </MainWrapper>
            <FooterWrapper/>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}
export default RootLayout;