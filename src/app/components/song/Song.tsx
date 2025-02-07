// components
import { SongItem } from './SongItem';
import { SongItemSkeleton } from '../SongSkeleton/SongItemSkeleton';

// interface
import * as SongInterface from '../../interfaces/song';


export const Song = ( props: { data: SongInterface.Song[] } ) => {
    const { data } = props;

    const skeleton = new Array(3).fill("");

    return (
        <>
            <div className='flex flex-col gap-y-[12px]'>
                { 
                    data 
                        ? data.map((item, index) => <SongItem key={index} data ={item} />)
                        : skeleton.map((item, index) => <SongItemSkeleton key = {index} />   )
                }
            </div>
        </>
    );
}