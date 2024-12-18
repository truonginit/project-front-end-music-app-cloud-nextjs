// components
import { SongListItem } from './SongListItem';

export const SongList = () => {
    return (
        <>
            <div className='flex flex-col gap-y-[12px]'>
                <SongListItem />
                <SongListItem />
                <SongListItem />
            </div>
        </>
    );
}