import React, {useEffect} from 'react';
import style from "./style.module.scss";
import SemanticWrapper from "@/components/SemanticWrapper/SemanticWrapper";
import LanguageSwitcher from "@/app/[lang]/components/LanguageSwitcher/LanguageSwitcher";
import {getMessage} from "@/getMessages";




const HeaderWrapper = async ({lang}) => {
    const {Header}= await getMessage(lang)
        console.log("header")
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