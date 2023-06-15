import React from 'react';
import SemanticWrapper from "@/components/SemanticWrapper/SemanticWrapper";
import style from "@/app/[lang]/components/navigation/style.module.scss";
import {getDictionary} from "@/getDictionaries";
import {navigationLinks} from "@/app/[lang]/components/navigation/links";
import CustomLink from "@/components/CustomLink/CustomLink";
import {pathGenerator} from "@/helpers/pathGenertor";

interface NavigationInterface {
    lang: string;
}

const NavigationWrapper = async ({lang}: NavigationInterface) => {
    const {Navigation} = await getDictionary(lang)

    const keyArray = Object.keys(Navigation)
    return (
        <SemanticWrapper Tag={"nav"}>
            <div className={style.navigation}>
                {
                    navigationLinks.map((item, i) =>
                        <CustomLink key={item.id}
                                    children={Navigation[keyArray[i]]}
                                    href={pathGenerator(lang, item.link)}
                        />)
                }
            </div>
        </SemanticWrapper>
    );
};

export default NavigationWrapper;