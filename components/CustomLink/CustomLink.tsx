"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import style from "./style.module.scss"
import React from "react";
import {classNames} from "@/helpers/classNames";


interface CustomLinkInterface {
    children : React.ReactNode;
    className : string;
    href : string;
}


const CustomLink = ({children, className , href}: CustomLinkInterface  & LinkProps) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    console.log(pathName , href)
    return (
        <Link
            href={href}
            className={classNames(className ,style.link ,isActive ? style.active : "")}>
            {children}
        </Link>
    );
};

export default CustomLink;