/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// component
import { CardItem } from "@/app/components/Card/CardItem";
import { CardItemSkeleton } from "@/app/components/CardSkeleton/CardItemSkeleton";

// hook
import { Key, useEffect, useState } from "react";

// firebase
import { ref, get } from "firebase/database";

// firebase config
import { Database } from '../../config/firebaseConfig';
import { Category } from "@/app/interfaces/categories";
import { Singer } from "@/app/interfaces/singer";

// reload raw data
const reloadRawData = (rawData: any) => {
    const data: any[] = [];
    rawData.forEach((item: { key: any; val: () => any; }) => { 
        data.push({ id: item.key, ...item.val() }) 
    })
    return data;
}

// Lấy danh sách danh mục
const getListSinger = async() => {
     // lấy dữ liệu raw trên firebase
     const rawData = await get(ref(Database, 'singers'));
     const data: any[] = reloadRawData(rawData);

     return data;
}

export const Section1 = () => {
    const [singers, setSinger] = useState<any>(null);
    
    const skeleton = new Array(10).fill("");

    useEffect(() => {
        const fetchOnFirebase = async () => {
            const data: any[] = await getListSinger();
            setSinger(data);
        }

        fetchOnFirebase();
    }, [singers]);

    return (
        <>
            <div className="grid grid-cols-5 gap-[20px]">
                {
                    singers 
                    ? singers.map((item: Category & Singer, index: Key | null | undefined ) => 
                        <CardItem 
                            key={index} 
                            data = {item}
                            linkTo= {'/singers/'}
                        />)
                    : skeleton.map((item, index) => <CardItemSkeleton key={index} />)
                }
            </div>
        </>
    );
}