// components
/* eslint-disable @next/next/no-img-element */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SongTitleItemSkeleton = () => {
    return (
        <>
            <div className="w-[100px] h-[10px]" >
                <Skeleton className="w-full h-full"></Skeleton>
            </div>
        </>
    );
}