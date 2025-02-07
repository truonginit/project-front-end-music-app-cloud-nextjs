/* eslint-disable @next/next/no-img-element */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SongImageItemSkeleton = () => {
    return (
        <>
            <div className={"aspect-square rounded-[15px] w-[76px] h-auto"}>
                <Skeleton className='w-full h-full' />
            </div>
        </>
    ); 
}