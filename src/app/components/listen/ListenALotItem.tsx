// icon
import { FaPlay, FaRegHeart  } from "react-icons/fa6";

export const ListenALotItem = () => {
    return (
        <>
        
            <div 
                className="w-full h-[96px] dark:bg-darkModePrimary rounded-[15px] p-[10px] flex items-center justify-between"
            > {/* wrap */}
                {/* content */}
                <div className="flex items-center gap-x-[10px]">
                    {/* image */}
                    <div className="w-[76px] h-[76px]">
                        <img 
                            src="/demo/hoquanghieu-cophong.png" 
                            alt="usd"
                            className="w-full h-full"
                        />
                    </div>

                    {/* info */}
                    <div className="flex flex-col cursor-pointer">
                        <span className="text-[16px] font-600 dark:text-darkModeText">Cô Phòng</span>
                        <span className="text-[12px] font-400 dark:text-darkModeSubText">Hồ Quang Hiếu, Huỳnh Văn</span>
                        <span className="text-[12px] font-400 dark:text-darkModeText">24.500 lượt nghe</span>
                    </div>
                </div>

                {/* wishlist */}
                <div className="flex items-center gap-x-[10px]">
                    <div className="w-[34px] h-[34px] inline-flex justify-center items-center  rounded-[50%] dark:text-darkModeText border-[1px] dark:border-darkModeText">
                        <FaPlay />
                    </div>
                    <div className="w-[34px] h-[34px] inline-flex justify-center items-center  rounded-[50%] dark:text-darkModeText border-[1px] dark:border-darkModeText">
                        <FaRegHeart />
                    </div>
                </div>
            </div>
        </>
    );
}
// dark:bg-darkModeActive