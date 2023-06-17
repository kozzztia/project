import React from 'react';
import SemanticWrapper from "@/components/SemanticWrapper/SemanticWrapper";
import style from "@/app/[lang]/components/navigation/style.module.scss";
import {getDictionary} from "@/getDictionaries";
import {navigationLinks} from "@/app/[lang]/components/navigation/links";
import CustomLink from "@/components/CustomLink/CustomLink";


interface NavigationInterface {
    lang: string;
}

const NavigationWrapper = async ({lang}: NavigationInterface) => {
    const {Navigation} = await getDictionary(lang)
    const keyArray = Object.keys(Navigation)
    const findHome = (item)=>{
        if(item.link === "home"){
           return `/${lang}`
        }
        else {
           return `/${lang}/${item.link}`
        }
    }

    return (
        <SemanticWrapper Tag={"nav"}>
            <ul className={style.navigation}>
                {
                    navigationLinks.map((item, i) =>
                        <CustomLink
                            className={style.navigation__item}
                            key={item.id}
                            children={Navigation[keyArray[i]]}
                            link={findHome(item)}
                        />)
                }
            </ul>
        </SemanticWrapper>
    );
};

export default NavigationWrapper;