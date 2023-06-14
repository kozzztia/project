
import React from 'react';
import SemanticWrapper from "@/components/SemanticWrapper/SemanticWrapper";
import style from "@/app/[lang]/components/navigation/style.module.scss";

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