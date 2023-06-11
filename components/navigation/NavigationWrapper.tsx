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
            <h2>{t('title')}</h2>
        </div>
    </SemanticWrapper>
    );
};

export default NavigationWrapper;