// components
import { BoxTitle } from "../boxtitle/BoxTitle";
import { SongList } from "./SongList";

export const Song = () => {
    return (
        <>
            <div className="xl:w-[425px] w-full ml-[20px]">
                <BoxTitle title="Nghe nhiều" className="" />
                <SongList />
            </div>
        </>
    );
}