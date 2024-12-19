// components
import Link from "next/link";

export const SiderLogo = () => {
    return (
        <>
            <div className="px-[20px] py-[25px] dark:bg-darkModeLogoBg">
                <Link href='/'>
                    <img src="/Logo.svg" alt="Logo Music App Cloud" />
                </Link>
            </div>
        </>
    );
}