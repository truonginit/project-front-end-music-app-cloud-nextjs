// components
import { SongCenterItem2 } from "./SongCenterItem2";
import { SongLeftItem2 } from "./SongLeftItem2";
import { SongRightItem2 } from "./SongRightItem2";

export const SongItem2 = () => {
    return (
        <>
            <div className="flex items-center justify-between dark:bg-darkModePrimary px-[18px] py-[10px] rounded-[15px]">
                {/* left */}
                <SongLeftItem2 />

                {/* center */}
                <SongCenterItem2 />
                
                {/* right */}
                <SongRightItem2 />
            </div>
        </>
    );
}

// hover:dark:bg-gradient-to-r from-darkModeActive