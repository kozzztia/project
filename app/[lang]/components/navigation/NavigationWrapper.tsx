'use client'
import React from 'react';
import SemanticWrapper from "@/components/SemanticWrapper/SemanticWrapper";
import {useTranslations} from "next-intl";
import style from "@/app/[lang]/components/navigation/style.module.scss";
import LanguageSwitcher from "@/app/[lang]/components/LanguageSwitcher/LanguageSwitcher";

const NavigationWrapper = () => {
    return (
    <SemanticWrapper Tag={"nav"}>
        <div className={style.navigation}>
            nav nav
        </div>
    </SemanticWrapper>
    );
};

export default NavigationWrapper;