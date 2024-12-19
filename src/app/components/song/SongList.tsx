// components
import { SongItem } from './SongItem';

export const SongList = () => {
    return (
        <>
            <div className='flex flex-col gap-y-[12px]'>
                <SongItem />
                <SongItem />
                <SongItem />
            </div>
        </>
    );
}