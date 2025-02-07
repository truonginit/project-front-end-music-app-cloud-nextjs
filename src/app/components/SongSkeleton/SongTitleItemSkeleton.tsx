// components
/* eslint-disable @next/next/no-img-element */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SongTitleItemSkeleton = () => {
    return (
        <>
            <div className="w-[100px] h-[10px]" >
                <Skeleton className="text-[16px] font-[600] dark:text-darkModeText dark:hover:text-darkModeActive hover:duration-1000"></Skeleton>
            </div>
        </>
    );
}