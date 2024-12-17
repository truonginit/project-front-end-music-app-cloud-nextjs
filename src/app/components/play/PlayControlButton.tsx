// icon
import { FaBackwardStep, FaPlay, FaForwardStep } from "react-icons/fa6";

export const PlayControlButton = () => {
    return (
        <>
            <div className="flex justify-center gap-[42px]">
                <button className="dark:text-darkModeText">
                    <FaBackwardStep />
                </button>
                <button className="dark:text-darkModeText inline-flex justify-center items-center dark:bg-darkModeActive w-[32px] h-[32px] rounded-[50%] ">
                    <FaPlay />
                </button>
                <button className="dark:text-darkModeText">
                    <FaForwardStep />
                </button>
            </div>
        </>
    );
}