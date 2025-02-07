/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


// components
import { Banner } from "../Banner/Banner";
import { Song } from '../Song/Song';
import { BoxTitle } from "../BoxTitle/BoxTitle";

// firebase
import { ref, get } from "firebase/database";

// firebase config
import { Database } from '../../config/firebaseConfig';
import { useEffect, useState } from "react";

// reload raw data
const reloadRawData = (rawData: any) => {
    const data: any[] = [];
    rawData.forEach((item: { key: any; val: () => any; }) => { 
        data.push({ id: item.key, ...item.val() }) 
    })
    return data.slice(0, data.length - 1);
}

// Lấy các ca sĩ trình diễn bài nhạc
const getSingerOfSongById = async (singerIds: string[]) => {
    const result: any[] = [];
    for(const singerId of singerIds) {
      const raw = await get(ref(Database, '/singers/' + singerId));
      result.push({
        id: singerId, 
        title: raw.val().title
      })
    }
    return result;
}

// Lấy danh sách bài nhạc
const getListSong = async() => {
     // lấy dữ liệu raw trên firebase
     const rawData = await get(ref(Database, 'songs'));
     const data: any[] = reloadRawData(rawData);

     // lấy ca sĩ của bài nhạc
     for(const item of data) {
         item['singers'] = await getSingerOfSongById(item.singerId);
     }
     return data;
}

export const Section1 = () => {
    const [songs, setSongs] = useState<any>(null);

    // lấy dữ liệu từ firebase
    // lấy danh sách bài nhạc
    useEffect(() => {
        const fetchOnFirebase = async () => {
           const data: any[] = await getListSong();
            setSongs(data);
        }

        fetchOnFirebase();
    }, [songs]);
    
    return (
        <>
            <div className="flex items-end mb-[30px]" > {/* wrap */}
                <Banner />
                <div className="w-[425px] ml-[20px]">
                    <BoxTitle title="Nghe nhiều" className="" />
                    <Song data = {songs} />
                </div>
            </div>
        </>
    );
}

// onValue(songRef, (songItems) => {
//     songItems.forEach( ( songItem ) => {
//         const songId = songItem.key;        // ID bài nhạc
//         const songData = songItem.val();    // Data bài nhạc

//         // lấy danh sách ca sĩ của bài nhạc
//         const singerNames: SongInterface.SingerOfSong[] = getSingerList(songData.singerId); // mảng chứa danh sách tên ca sĩ

//         const item: SongInterface.Song = {
//             id: songId,
//             title: songData.title,
//             image: songData.image,
//             singers: singerNames,
//             listen: songData.listen
//         };

//         // giới hạn chỉ có 3 item
//         if(DataSection.length < 3) DataSection.push(item);
//     });
// });