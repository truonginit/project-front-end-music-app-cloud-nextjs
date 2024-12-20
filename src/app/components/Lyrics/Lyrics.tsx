import { BoxTitle } from "../BoxTitle/BoxTitle";
import { LyricsDetail } from "./LyricsDetail";

export const Lyrics = ( props: { lyrics: string } ) => {
    const { lyrics } = props;
    
    return (
        <>
            <div className="mb-[30px]">
                <BoxTitle title="Lời Bài Hát" className=""/>
                <LyricsDetail lyrics={lyrics}/>
            </div>
        </>
    );
}