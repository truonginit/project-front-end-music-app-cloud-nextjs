// components
import Link from "next/link";

export const SongTitleItem = (props: { title: string, href: string }) => {
    const { title, href } = props;
    return (
        <>
            <Link href = {'/song/' + href }>
                <span className="text-[16px] font-[600] dark:text-darkModeText dark:hover:text-darkModeActive hover:duration-1000">{title}</span>
            </Link>
        </>
    );
}