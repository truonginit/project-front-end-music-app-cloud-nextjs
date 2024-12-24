// components
import { CardItem } from "./CardItem";

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
    const { linkTo, data ,className } = props;
    

    return (
        <>
            {/* <div className={"flex items-center gap-x-[20px] mb-[30px]" + className}> */}
            <div className={"grid grid-cols-5 gap-[20px] mb-[30px]" + className}>
                { 
                    data 
                    ? data.map( ( item, index ) => 
                        <CardItem 
                            key={index} 
                            data = {item}
                            linkTo= {linkTo}
                        />)
                    : ""
                }
            </div>
        </>
    );
}