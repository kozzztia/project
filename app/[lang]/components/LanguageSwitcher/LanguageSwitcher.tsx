'use client'
import { usePathname } from 'next/navigation'
import {i18n} from "@/i18n-config";
import React from "react";
import {classNames} from "@/helpers/classNames";
import style from "./style.module.scss"
import SwitcherLink from "@/app/[lang]/components/LanguageSwitcher/SwitcherLink/SwitcherLink";


interface LanguageSwitcherInterface {
    className?: string;
}

export default function LanguageSwitcher({className} : LanguageSwitcherInterface) {
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }
    return (
            <ul className={classNames(className as string , style.switcher)}>
                {i18n.locales.map((locale) =>
                    <li key={locale}>
                        <SwitcherLink
                            className={classNames(style.switcher__item)}
                            href={redirectedPathName(locale)}>
                            {locale}
                        </SwitcherLink>
                    </li>
                )}
            </ul>
    )
}