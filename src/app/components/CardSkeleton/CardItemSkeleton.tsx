// components
// import Image from 'next/image'
import Skeleton from "react-loading-skeleton";
import { CardImageItemSkeleton } from "../CardSkeleton/CardImageItemSkeleton";

export const CardItemSkeleton = () => {
    return (
        <>
            <div className="group mb-[10px]">
                <CardImageItemSkeleton />
                <div className="w-[120px] h-[8px] mb-[5px]">
                    <Skeleton className="w-full h-full" />
                </div>
                <div className="w-[150px] h-[5px]">
                    <Skeleton className="w-full h-full" />
                </div>
            </div>
        </>
    ); 
}

