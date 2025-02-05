/* eslint-disable @typescript-eslint/no-explicit-any */
import { SongItem2 } from "./SongItem2";

export const Song2 = (props: any) => {
    const { songs } = props;

    return (
        <>
            <div className="grid grid-cols-1 gap-[10px]">
                {songs?.map((song: any, index: any) => (
                    <SongItem2 key={index} song={song}/>
                ))}
                
            </div>
        </>
    );
}