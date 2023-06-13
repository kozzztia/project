import React from 'react';
import SemanticWrapper from "@/components/SemanticWrapper/SemanticWrapper";
import style from "@/app/[lang]/components/main/style.module.scss";

interface MainInterface {
    children : React.ReactNode;
}
const MainWrapper = ({children} : MainInterface) => {
    return (
        <SemanticWrapper Tag={'main'}>
            <div className={style.main}>
                {children}
            </div>
        </SemanticWrapper>
    );
};

export default MainWrapper;