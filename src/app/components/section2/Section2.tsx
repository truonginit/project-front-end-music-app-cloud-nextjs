/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// components
import { BoxTitle } from "../BoxTitle/BoxTitle";
import { Card } from '../Card/Card';

// interface
// import { SongInterface, SingerOfSongInterface } from '../../interfaces/song';

// firebase
import { ref, get } from "firebase/database";

// firebase config
import { Database } from '../../config/firebaseConfig';

// interface
// import * as CategoryInterface from '../../interfaces/categories'; 
// import * as SingerInterface from '../../interfaces/singer';
import { useEffect, useState } from "react";

// Intersection type (hợp nhiều interface làm 1), dùng dấu &
// type GeneralInterface = CategoryInterface.Category & SingerInterface.Singer;


// reload raw data
const reloadRawData = (rawData: any) => {
    const data: any[] = [];
    rawData.forEach((item: { key: any; val: () => any; }) => { 
        data.push({ id: item.key, ...item.val() }) 
    })
    return data.slice(0, data.length - 2);
}

// Lấy danh sách danh mục
const getListCategory = async() => {
     // lấy dữ liệu raw trên firebase
     const rawData = await get(ref(Database, 'categories'));
     const data: any[] = reloadRawData(rawData);

     return data;
}

export const Section2 = () => {

    const [categories, setCategories] = useState<any>(null);
    
    useEffect(() => {
        const fetchOnFirebase = async () => {
            const data: any[] = await getListCategory();
            setCategories(data);
        }

        fetchOnFirebase();
    }, [categories]);

    return (
        <>
            <div>
                <BoxTitle title="danh mục nổi bật" className="" />
                <Card data = {categories} linkTo = {'/categories'} />
            </div>  
        </>
    );
}

// mảng chứa data 
// const DataSection: GeneralInterface[] = [];

// onValue(categoriesRef, (categoryItems) => {
//     categoryItems.forEach( categoryItem => {
//         const categoryId   = categoryItem.key;
//         const categoryData = categoryItem.val();
        
//         const item: GeneralInterface = {
//             id: categoryId, 
//             title: categoryData.title, 
//             description: categoryData.description, 
//             image: categoryData.image
//         };
        
//         if(DataSection.length < 5 ) DataSection.push(item);
//     })
// });