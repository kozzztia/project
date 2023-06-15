import React from 'react';
import style from "./style.module.scss";
import SemanticWrapper from "@/components/SemanticWrapper/SemanticWrapper";
import LanguageSwitcher from "@/app/[lang]/components/LanguageSwitcher/LanguageSwitcher";
import {getDictionary} from "@/getDictionaries";




const HeaderWrapper = async ({lang}) => {
    const {Header}= await getDictionary(lang)
    return (
        <SemanticWrapper Tag={"header"} >
            <div className={style.header}>
                <h2>{Header.title}</h2>
                <LanguageSwitcher/>
            </div>
        </SemanticWrapper>
    );
};
export default HeaderWrapper;