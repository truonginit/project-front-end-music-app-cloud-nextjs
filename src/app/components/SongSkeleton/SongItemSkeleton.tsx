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
                    <div className="flex flex-col cursor-pointer">
                        <SongTitleItemSkeleton />

                        {/* danh sách ca sĩ */}
                        <div className='mt-[10px] w-[83px] h-[10px]'>
                            <Skeleton className=" text-[12px] font-[400] hover:duration-700">
                            </Skeleton>
                        </div>

                        <div className='mt-[10px] w-[20px] h-[18px]'>
                            <Skeleton className=" text-[12px] font-[400] dark:text-darkModeText"></Skeleton>
                        </div>

                    </div>
                </div>
            </div> 
        </>
    )
}