import './globals.scss'
import React from "react";
import FooterWrapper from "@/app/[lang]/components/footer/FooterWrapper";
import MainWrapper from "@/app/[lang]/components/main/MainWrapper";
import HeaderWrapper from "@/app/[lang]/components/header/HeaderWrapper";
import NavigationWrapper from "@/app/[lang]/components/navigation/NavigationWrapper";
import { i18n } from '@/i18n-config'
import {getMessage} from "@/getDictionaries";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

interface RootLayoutInterface {
    children: React.ReactNode;
    params: { lang : string };
}

const RootLayout = async ({children, params}: RootLayoutInterface) => {
    return (
        <html lang={params.lang}>
        <body>
            <HeaderWrapper lang={params.lang}/>
            <NavigationWrapper/>
            <MainWrapper>
                {children}
            </MainWrapper>
            <FooterWrapper lang={params.lang}/>
        </body>
        </html>
    )
}
export default RootLayout;