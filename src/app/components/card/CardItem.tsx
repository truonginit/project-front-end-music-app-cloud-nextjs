// components
// import Image from 'next/image'
import { CardImageItem } from "./CardImageItem";
import { CardTitleItem } from "./CardTitleItem";
import { CardDescItem } from "./CardDescItem";

export const CardItem = () => {
    return (
        <>
            <div className="w-[180px] cursor-pointer">
                <CardImageItem />

                {/* content */}
                <div>
                    <CardTitleItem />
                    <CardDescItem />
                </div>
            </div>
        </>
    ); 
}