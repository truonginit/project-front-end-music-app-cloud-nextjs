import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
/* eslint-disable @next/next/no-img-element */
export const CardImageItemSkeleton = () => {
    return (
        <>
            <div className='aspect-square rounded-[15px]'>
                <Skeleton className='w-full h-full'/>
            </div>
        </>
    );
}

// truncate ~ overflow: hidden