/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
// components
import { CardItem } from "./CardItem";
import { CardItemSkeleton } from "../CardSkeleton/CardItemSkeleton";

// interface
import * as CategoryInterface from '../../interfaces/categories'; 
import * as SingerInterface from '../../interfaces/singer';

// Intersection type (hợp nhiều interface làm 1), dùng dấu &
type GeneralInterface = CategoryInterface.Category & SingerInterface.Singer;

interface InterfaceProps {
    className?: string,
    data: GeneralInterface[],
    linkTo: string,
}

export const Card = (props: InterfaceProps) => {
    const { linkTo, data, className } = props;
    
    const skeleton = new Array(5).fill("");

    return (
        <>
            {/* <div className={"flex items-center gap-x-[20px] mb-[30px]" + className}> */}
            <div className={"grid grid-cols-5 gap-[20px] mb-[30px]"}>
                { 
                    data 
                    ? data.map( ( item, index ) => 
                        <CardItem 
                            key={index} 
                            data = {item}
                            linkTo= {linkTo}
                        />)
                    : skeleton.map((item, index) => <CardItemSkeleton /> )
                }
            </div>
        </>
    );
}