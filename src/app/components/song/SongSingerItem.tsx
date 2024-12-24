// components
import Link from "next/link";

/**
 * 
 * @param singer tên ca sĩ
 * @param href   id của ca sĩ
 * @param isLast xác định xem phải ca sĩ cuối cùng của bài hát không
 * @returns 
 */
export const SongSingerItem = (props: { singer: string, href: string, isLast: boolean }) => {
    const { singer, href, isLast } = props;

    const content = singer + (isLast === false ? ", " : ""); // nếu là ca sĩ cuối cùng thì không cần thêm dấu ',' phía sau

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