import React from 'react';
import style from "./style.module.scss"
import SemanticWrapper from "@/components/semanticWrapper/SemanticWrapper";

const FooterWrapper = () => {
    return (

        <SemanticWrapper Tag={"footer"} >
            <div className={style.footer}>
                footer
            </div>
        </SemanticWrapper>
    );
};

export default FooterWrapper;