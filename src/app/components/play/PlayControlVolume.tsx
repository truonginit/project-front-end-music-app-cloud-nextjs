// icon
import { FaVolumeUp } from "react-icons/fa";

export const PlayControlVolume = () => {
    return (
        <>
            <div className="w-[184px] flex items-center gap-[6px]">
                {/* icon volum */}
                <div className="text-[20px] dark:text-darkModeText">
                    <FaVolumeUp />
                </div>
                
                {/*  */}
                <div className="relative flex" >
                    {/* thanh màu */}
                    <div className="h-[4px] w-[80%] rounded-[50px] dark:bg-darkModeActive  absolute left-0 top-[0px]"></div>

                    {/* thanh input */}
                    <input 
                        type="range"
                        name="volume"
                        min={0}
                        max={100}
                        defaultValue={80} 
                        className="w-full h-[4px] cursor-pointer appearance-none range-music rounded-[50px] dark:bg-[#FFFFFF0A]"
                    />
            </div>
                
            </div>
        </>
    );
}