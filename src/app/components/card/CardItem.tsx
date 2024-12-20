// components
// import Image from 'next/image'
import { CardImageItem } from "./CardImageItem";
import { CardTitleItem } from "./CardTitleItem";
import { CardDescItem } from "./CardDescItem";
import Link from "next/link";

export const CardItem = () => {
    return (
        <>
            <div className="">
                <Link href={'/'}>
                    <CardImageItem />
                    <CardTitleItem />
                    <CardDescItem />
                </Link>

            </div>
        </>
    ); 
}

