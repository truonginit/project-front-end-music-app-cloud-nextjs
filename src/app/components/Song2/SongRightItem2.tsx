import { FaRegHeart } from "react-icons/fa6";

export const SongRightItem2 = () => {
    return (
        <>
            <div className="w-[30%] flex items-center gap-x-[18px] justify-end">
                <div className="text-[14px] font-[400] dark:text-darkModeText">
                    4:32
                </div>

                <div className="dark:text-darkModeText text-[18px] cursor-pointer hover:dark:text-darkModeActive">
                    <FaRegHeart />
                </div>
            </div>
        </>
    );
}