"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import style from "./style.module.scss"
import React from "react";
import {classNames} from "@/helpers/classNames";


interface CustomLinkInterface {
    children : React.ReactNode;
    className : string;
    link : string;
}


const CustomLink = ({children, className , link}: CustomLinkInterface) => {
    const pathName = usePathname();
    const isActive = pathName === link;

    return (
        <Link
            href={link}
            className={classNames(className ,style.link ,isActive ? style.active : "")}>
            {children}
        </Link>
    );
};

export default CustomLink;