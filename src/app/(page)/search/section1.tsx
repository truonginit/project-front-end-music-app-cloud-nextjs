/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// component
import { Song2 } from "@/app/components/Song2/Song2";

// hook
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// firebase
import { ref, get } from "firebase/database";
import { Database } from '@/app/config/firebaseConfig'; // định ngh


// Lấy các ca sĩ trình diễn bài nhạc
const getSingerOfSongById = async (singerIds: string[]) => {
  let result: string = "";
  for(const singerId of singerIds) {
    const singer = await get(ref(Database, '/singers/' + singerId));
    result += singer.val().title + ", ";
  }
  result = result.slice(0, result.length - 2); // loại bỏ dấu , và khoảng trắng dư
  return result;
}

// Lấy các bài nhạc thuộc cùng danh mục nhưng khác songId được truyền vào
const getListSongByKeyWord = async (keyword: string) => {
  const result = await get(ref(Database, 'songs'));
  const raws: any[] = [];
  result.forEach((item) => { raws.push({ songId: item.key, ...item.val() }) });
  
  const songs: any[] = []; // mảng kết quả những bài hát cùng danh mục
  for(const item of raws) {
    const singer = await getSingerOfSongById(item.singerId);  // lấy ca sĩ trình diễn

    // không đưa bài hát đang hiển thị vào danh mục này vì không cần thiết
    // và bài hát được đưa vào phải có cùng danh mục
    if(item.title.includes(keyword)) {
        songs.push({
            id: item.songId,
            image: item.image,
            singer: singer,
            title: item.title,
            link:   `/song/${item.songId}`,  // đường dẫn để vào chi tiết bài nhạc
            time:   `5:32`              // fix cứng thời gian
        })
    }

  }
  return songs;
}

export const Section1 = () => {
    const searchParams = useSearchParams(); // sử dụng useSearchParams để lấy query (?)
    const keyword: string = searchParams.get('keyword') || "";

    const [songs, setSongs] = useState<any>(null);   // set các bài nhạc

    useEffect(() => {
        const fetchOnFirebase = async () => {
            const data: any = await getListSongByKeyWord(keyword);
            setSongs(data); // set data vào biến songs của useState
        }
        fetchOnFirebase();
    }, [songs]);


    return (
        <>
            <Song2 songs = {songs}/>
        </>
    )
}