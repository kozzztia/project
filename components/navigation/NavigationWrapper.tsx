'use client'
import React from 'react';
import SemanticWrapper from "@/components/semanticWrapper/SemanticWrapper";
import {useTranslations} from "next-intl";
import style from "@/components/navigation/style.module.scss";

const NavigationWrapper = () => {
    const t = useTranslations('Navigation');
    return (
    <SemanticWrapper Tag={"nav"}>
        <div className={style.navigation}>
            <p>{t('title')}</p>
        </div>
    </SemanticWrapper>
    );
};

export default NavigationWrapper;