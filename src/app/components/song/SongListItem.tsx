// icon
import { FaPlay, FaRegHeart  } from "react-icons/fa6";

export const SongListItem = () => {
    return (
        <>
        
            <div 
                className="w-full md:h-[96px] h-[76px] dark:bg-darkModePrimary rounded-[15px] p-[10px] flex items-center justify-between"
            > {/* wrap */}
                {/* content */}
                <div className="flex items-center gap-x-[10px]">
                    {/* image */}
                    <div className="md:w-[76px] md:h-[76px] h-[50px] w-[50px]">
                        <img 
                            src="/demo/hoquanghieu-cophong.png" 
                            alt="usd"
                            className="w-full h-full"
                        />
                    </div>

                    {/* info */}
                    <div className="flex flex-col cursor-pointer">
                        <span className="md:text-[16px] text-[13px] font-600 dark:text-darkModeText">Cô Phòng</span>
                        <span className="md:text-[12px] text-[10px] font-400 dark:text-darkModeSubText">Hồ Quang Hiếu, Huỳnh Văn</span>
                        <span className="md:text-[12px] text-[10px] font-400 dark:text-darkModeText">24.500 lượt nghe</span>
                    </div>
                </div>

                {/* wishlist */}
                <div className="flex items-center md:gap-x-[10px] gap-x-[4px]">
                    <div className="md:w-[34px] md:h-[34px] w-[20px] h-[20px] md:text-[18px] text-[12px] inline-flex justify-center items-center  rounded-[50%] dark:text-darkModeText border-[1px] dark:border-darkModeText">
                        <FaPlay />
                    </div>
                    <div className="md:w-[34px] md:h-[34px] w-[20px] h-[20px] md:text-[18px] text-[12px] inline-flex justify-center items-center  rounded-[50%] dark:text-darkModeText border-[1px] dark:border-darkModeText">
                        <FaRegHeart />
                    </div>
                </div>
            </div>
        </>
    );
}
// dark:bg-darkModeActive