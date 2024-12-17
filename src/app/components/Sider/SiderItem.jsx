"use client"

// components
import Link from "next/link";

// hooks
import { usePathname } from "next/navigation";

export const SiderItem = (props) => {
    const pathname = usePathname(); // lấy href đang truy cập
    const { icon, title, href } = props;

    return (
        <>
            <li className=" mb-[20px] dark:text-darkModeText">
                <Link 
                    href={href} 
                    className={`flex items-center gap-x-[20px] transition duration-0 ease-in-out ${pathname === href ? "dark:text-darkModeActive" : "dark:text-darkModeText"}  hover:dark:text-darkModeActive  hover:duration-1000 `}
                >
                    <span className="text-[20px] "> {icon} </span>
                    <span className="text-[16px] font-700"> {title} </span>
                </Link>
            </li>
        </>
    );
}