import { usePathname } from "next/navigation";
import style from "./style.module.scss"
import React from "react";
import {classNames} from "@/helpers/classNames";
import Link, {LinkProps} from "next/link";


interface CustomLinkInterface {
    children : React.ReactNode;
    className : string;
    link : string
}


const SwitcherLink = ({children, className , link}: CustomLinkInterface) => {
    const pathName = usePathname();
    const isActive = pathName === link;
    return (
        <Link
            className={classNames(className ,style.link ,isActive ? style.active : "")}
            href={link}
        >
            {children}
        </Link>
    );
};

export default SwitcherLink;