// components
import { SongItem } from './SongItem';

// interface
import { SongInterface } from '../../interfaces/song';

export const Song = ( props: { data: SongInterface[] } ) => {
    const { data } = props;

    return (
        <>
            <div className='flex flex-col gap-y-[12px]'>
                {data.map((item, index) => <SongItem key={index} data ={item} />)} {/* duyệt qua từng bài nhạc */}
            </div>
        </>
    );
}