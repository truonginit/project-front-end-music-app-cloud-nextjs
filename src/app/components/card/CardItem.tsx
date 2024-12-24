// components
// import Image from 'next/image'
import { CardImageItem } from "./CardImageItem";
import { CardTitleItem } from "./CardTitleItem";
import { CardDescItem } from "./CardDescItem";
import Link from "next/link";

// interface
import * as CategoryInterface from '../../interfaces/categories'; 
import * as SingerInterface from '../../interfaces/singer';

// Intersection type (hợp nhiều interface làm 1), dùng dấu &
type GeneralInterface = CategoryInterface.Category & SingerInterface.Singer;

export const CardItem = (props: {data: GeneralInterface, linkTo: string }) => {
    const { data, linkTo } = props;

    return (
        <>
            <div className="group">
                <Link href={linkTo + '/' + data.id}>
                    <CardImageItem img = {data.image}/>
                    <CardTitleItem title = {data.title} />
                    <CardDescItem description = {data.description}/>
                </Link>

            </div>
        </>
    ); 
}

