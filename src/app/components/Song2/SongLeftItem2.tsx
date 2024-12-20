/* eslint-disable @next/next/no-img-element */
// icon
import { FaPlay } from "react-icons/fa6";

export const SongLeftItem2 = () => {
    return (
        <>
            <div className="w-[40%] flex items-center gap-x-[12px] cursor-pointer">
                {/* icon */}
                <div  className="dark:text-darkModeText text-[22px]">
                    <FaPlay />
                </div>

                {/* image */}
                <div className="w-[42px] aspect-square truncate rounded-[8px]">
                    <img src="/demo/hoquanghieu-cophong.png" alt="" className="" />
                </div>

                {/* title */}
                <div className="text-[14px] font-[700] dark:text-darkModeText">
                    Cô Phòng
                </div>
            </div>
        </>
    );
}