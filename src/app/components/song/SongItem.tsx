// icon
import { FaPlay, FaRegHeart  } from "react-icons/fa6";

// components
// import Link from "next/link";
import { SongImageItem } from "./SongImageItem";
import { SongTitleItem } from "./SongTitleItem";

export const SongItem = () => {
    return (
        <>
            <div 
                className="w-full h-[96px] dark:bg-darkModePrimary rounded-[15px] p-[10px] flex items-center justify-between"
            > {/* wrap */}
                {/* content */}
                <div className="flex items-center gap-x-[10px]">
                    <SongImageItem />

                    {/* info: Tên bài nhạc & Tên Ca sĩ & Số lượt nghe */}
                    <div className="flex flex-col cursor-pointer">
                        <SongTitleItem />
                        <span className="text-[12px] font-[400] dark:text-darkModeSubText">Hồ Quang Hiếu, Huỳnh Văn</span>
                        <span className="text-[12px] font-[400] dark:text-darkModeText">24.500 lượt nghe</span>
                    </div>
                </div>

                {/* wishlist & play */}
                <div className="flex items-center gap-x-[10px]">
                    <div className="w-[34px] h-[34px] text-[16px] inline-flex justify-center items-center rounded-[50%] dark:text-darkModeText border-[1px] dark:border-darkModeText hover:dark:border-darkModeActive hover:dark:bg-darkModeActive hover:duration-1000">
                        <FaPlay />
                    </div>
                    <div className="w-[34px] h-[34px] text-[16px] inline-flex justify-center items-center  rounded-[50%] dark:text-darkModeText border-[1px] dark:border-darkModeText hover:dark:border-darkModeActive hover:dark:bg-darkModeActive hover:duration-1000">
                        <FaRegHeart />
                    </div>
                </div>
            </div>
        </>
    );
}
// dark:bg-darkModeActive