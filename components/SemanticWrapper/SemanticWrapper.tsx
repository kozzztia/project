import React from 'react';
import {classNames} from "@/helpers/classNames";



interface SemanticWrapperInterface {
    Tag: string,
    children: React.ReactNode,
    color?: string,
    className?: string,
}

const SemanticWrapper = ({Tag , children , className , color = 'inherit'} : SemanticWrapperInterface) => {
    return (
        <Tag className = {classNames(className as string)}>
            {children}
        </Tag>
    );
};

export default SemanticWrapper;