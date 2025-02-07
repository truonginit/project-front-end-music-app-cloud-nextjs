/* eslint-disable @next/next/no-img-element */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SongImageItemSkeleton = () => {
    return (
        <>
            <Skeleton className={"aspect-square rounded-[10px] w-[76px] h-[76px] truncate"}>
            </Skeleton>
        </>
    ); 
}