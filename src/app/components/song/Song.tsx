// components
import { BoxTitle } from "../BoxTitle/BoxTitle";
import { SongList } from "./SongList";

export const Song = () => {
    return (
        <>
            <div className="w-[425px] ml-[20px]">
                <BoxTitle title="Nghe nhiều" className="" />
                <SongList />
            </div>
        </>
    );
}