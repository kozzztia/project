import './globals.scss'
import React, {memo} from "react";
import FooterWrapper from "@/components/footer/FooterWrapper";
import MainWrapper from "@/components/main/MainWrapper";
import HeaderWrapper from "@/components/header/HeaderWrapper";


export const metadata = {
    title: '',
    description: '',
}


interface RootLayoutInterface {
    children : React.ReactNode
}
 const RootLayout = ({children}: RootLayoutInterface) => {
    return (
        <html lang="en , ua">
        <body>
            <HeaderWrapper/>
            <MainWrapper>
                {children}
            </MainWrapper>
            <FooterWrapper/>
        </body>
        </html>
    )
}
export default RootLayout;