/* eslint-disable @typescript-eslint/no-explicit-any */
// components
import Link from "next/link";
import { SongCenterItem2 } from "./SongCenterItem2";
import { SongLeftItem2 } from "./SongLeftItem2";
import { SongRightItem2 } from "./SongRightItem2";

export const SongItem2 = (props: any) => {
    const { song } = props;
    const { title, time, singer, link, image } = song;
    return (
        <>
            <Link href = {link}>
                <div className="flex items-center justify-between dark:bg-darkModePrimary px-[18px] py-[10px] rounded-[15px]">
                    {/* left */}
                    <SongLeftItem2 title={title} image = {image}/>

                    {/* center */}
                    <SongCenterItem2 singer = {singer}/>
                    
                    {/* right */}
                    <SongRightItem2 time={time} />
                </div>
            </Link>
        </>
    );
}

// hover:dark:bg-gradient-to-r from-darkModeActive