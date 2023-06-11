'use client';
import React from 'react';
import style from "./style.module.scss";
import SemanticWrapper from "@/components/semanticWrapper/SemanticWrapper";
import {useTranslations} from 'next-intl';


const HeaderWrapper = () => {
    const t = useTranslations('Header')
    return (
        <SemanticWrapper Tag={'header'}>
            <div className={style.header}>
                <p>{t('title')}</p>
            </div>
        </SemanticWrapper>

    );
};

export default HeaderWrapper;