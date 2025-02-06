/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { CardInfo } from "@/app/components/Card/CardInfo";
import { Song2 } from "@/app/components/Song2/Song2";
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

// firebase
import { ref, get } from "firebase/database";
import { Database } from '@/app/config/firebaseConfig'; // định ngh

// lấy thông tin chi tiết singer theo id
const getInfoSingerById = async (singerId: string) => {
  const result = await get(ref(Database, 'singers/' + singerId));  // chú ý
  return result.val();
}

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

// lấy danh sách bài nhạc thuộc về singer
const getSongsOfSingerBySingerId = async (singerId: string) => {
  const result = await get(ref(Database, 'songs'));
  const raws: any[] = [];
  result.forEach((item) => { raws.push({ songId: item.key, ...item.val() }) });
  const songs: any[] = []; // mảng kết quả những bài hát cùng danh mục
  for(const item of raws) {
    const singer = await getSingerOfSongById(item.singerId);  // lấy ca sĩ trình diễn

    // bài nhạc thuộc về ca sĩ
    if(item.singerId.includes(singerId)) {
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


export default async function SingerDetailPage(props: any) {
  // lấy id ca sĩ trên thanh params
  const { id } = await props.params;

  // lấy thông tin chi tiết ca sĩ
  const singer = await getInfoSingerById(id);

  // lấy danh sách bài nhạc thuộc về ca sĩ
  const songs = await getSongsOfSingerBySingerId(id);

  return (
      <>
        <CardInfo
          image = {singer.image}
          title = {singer.title}
          description = {singer.description}
        />

        {/* Danh sách bài hát */}
        <BoxTitle title="Danh Sách Bài Hát" className="" />

        <Song2 songs = {songs} />
      </>
  );
}

// data mẫu thông tin ca sĩ
// // thông tin ca sĩ
// const infoCard = {
//   image: '/demo/sontung-mtp.png',
//   title: 'Sơn Tùng M-TP',
//   desc:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// }