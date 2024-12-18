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
                    className={`flex items-center xl:gap-x-[20px] gap-x-[10px] transition duration-0 ease-in-out ${pathname === href ? "dark:text-darkModeActive" : "dark:text-darkModeText"}  hover:dark:text-darkModeActive  hover:duration-1000 `}
                >
                    <span className="xl:text-[20px] "> {icon} </span>
                    <span className="xl:text-[16px] text-[13px] font-700"> {title} </span>
                </Link>
            </li>
        </>
    );
}