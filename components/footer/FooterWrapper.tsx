'use client'
import React from 'react';
import style from "./style.module.scss"
import SemanticWrapper from "@/components/semanticWrapper/SemanticWrapper";
import {useTranslations} from "next-intl";

const FooterWrapper = () => {
    const t = useTranslations('Footer')
    return (

        <SemanticWrapper Tag={"footer"} >
            <div className={style.footer}>
                <h2>{t('footer')}</h2>
            </div>
        </SemanticWrapper>
    );
};

export default FooterWrapper;