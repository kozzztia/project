import { usePathname } from "next/navigation";
import style from "./style.module.scss"
import React from "react";
import {classNames} from "@/helpers/classNames";
import Link, {LinkProps} from "next/link";


interface CustomLinkInterface {
    children : React.ReactNode;
    className : string;
}


const SwitcherLink = ({children, className , href}: CustomLinkInterface & LinkProps) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        <Link
            className={classNames(className ,style.link ,isActive ? style.active : "")}
            href={href}
        >
            {children}
        </Link>
    );
};

export default SwitcherLink;