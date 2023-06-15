
import React, {memo} from 'react';
import style from "./style.module.scss"
import SemanticWrapper from "@/components/SemanticWrapper/SemanticWrapper";
import {getDictionary} from "@/dictionaries/getDictionaries";

const FooterWrapper = async ({lang})=>{
    const {Footer} = await getDictionary(lang)
    return (

        <SemanticWrapper Tag={"footer"} >
            <div className={style.footer}>
                <h2>{Footer.footer}</h2>
            </div>
        </SemanticWrapper>
    );
};

export default memo(FooterWrapper);