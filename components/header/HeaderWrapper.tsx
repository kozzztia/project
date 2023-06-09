import React from 'react';
import style from "./style.module.scss"
import SemanticWrapper from "@/components/semanticWrapper/SemanticWrapper";
const HeaderWrapper = () => {
    return (
        <SemanticWrapper Tag={'header'}>
            <div className={style.header}>
                header
            </div>
        </SemanticWrapper>

    );
};

export default HeaderWrapper;