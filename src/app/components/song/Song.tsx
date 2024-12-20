// components
import { SongItem } from './SongItem';

export const Song = () => {
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