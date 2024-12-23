// components
import Link from "next/link";

export const SongSingerItem = (props: { singer: string, href: string, isLast: boolean }) => {
    const { singer, href, isLast } = props;

    const content = singer + (isLast === false ? ", " : "");

    return (
        <>
            <Link href={'/singers/' + href}>
                <span className="text-[12px] font-[400] dark:text-darkModeSubText ml-[3px] hover:dark:text-darkModeActive hover:duration-700">
                    {content}
                </span>
            </Link>

        </>
    );
}