'use client'
import { usePathname } from 'next/navigation'
import {i18n} from "@/i18n-config";
import React from "react";
import CustomLink from "@/components/CustomLink/CustomLink";

export default function LanguageSwitcher() {
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <div>
            <ul>
                {i18n.locales.map((locale) => {
                    return (
                        <li key={locale}>
                            <CustomLink href={redirectedPathName(locale)}>{locale}</CustomLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}