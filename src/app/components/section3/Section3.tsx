"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
// components
import { BoxTitle } from "../BoxTitle/BoxTitle";
import { Card } from '../Card/Card';

// hook
import { useEffect, useState } from "react";

// firebase
import { ref, get } from "firebase/database";

// firebase config
import { Database } from '../../config/firebaseConfig';

// reload raw data
const reloadRawData = (rawData: any) => {
    const data: any[] = [];
    rawData.forEach((item: { key: any; val: () => any; }) => { 
        data.push({ id: item.key, ...item.val() }) 
    })
    return data;
}

// Lấy danh sách danh mục
const getListSong = async() => {
     // lấy dữ liệu raw trên firebase
     const rawData = await get(ref(Database, 'singers'));
     const data: any[] = reloadRawData(rawData);

     return data;
}

export const Section3 = () => {
    const [songs, setSongs] = useState<any>(null);
    
    useEffect(() => {
        const fetchOnFirebase = async () => {
            const data: any[] = await getListSong();
            setSongs(data);
        }

        fetchOnFirebase();
    }, [songs]);

    return (
        <>
            <BoxTitle title="Ca sĩ nổi bật"  className=""/>
            <Card data = {songs} linkTo = {'/singers'} />     
        </>
    );
}