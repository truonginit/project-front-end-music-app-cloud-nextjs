// components
import Link from "next/link";

export const SongTitleItem = () => {
    return (
        <>
            <Link href='/'>
                <span className="text-[16px] font-[600] dark:text-darkModeText dark:hover:text-darkModeActive hover:duration-1000">Cô Phòng</span>
            </Link>
        </>
    );
}