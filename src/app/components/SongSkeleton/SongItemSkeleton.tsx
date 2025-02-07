import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// component
import { SongImageItemSkeleton } from '../SongSkeleton/SongImageItemSkeleton';
import { SongTitleItemSkeleton } from '../SongSkeleton/SongTitleItemSkeleton';
export const SongItemSkeleton = () => {
    return (
        <>
            <div 
                className="w-full h-[96px] dark:bg-darkModePrimary rounded-[15px] p-[10px] flex items-center justify-between"
            >
                {/* wrap */}
                {/* content */}
                <div className="flex items-center gap-x-[10px]">
                    <SongImageItemSkeleton />

                    {/* info: Tên bài nhạc & Tên Ca sĩ & Số lượt nghe */}
                    <div className="flex flex-col justify-center cursor-pointer">
                        <SongTitleItemSkeleton />

                        {/* danh sách ca sĩ */}
                        <div className='mt-[10px] w-[83px] h-[8px]'>
                            <Skeleton className=" w-full h-full"/>
                        </div>

                        <div className='mt-[10px] w-[20px] h-[5px]'>
                            <Skeleton className=" w-full h-full"/>
                        </div>

                    </div>
                </div>
            </div> 
        </>
    )
}