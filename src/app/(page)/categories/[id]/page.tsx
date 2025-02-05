/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";

// components
import { CardInfo } from "@/app/components/Card/CardInfo";
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { Song2 } from "@/app/components/Song2/Song2";

// Metadata
export const metadata: Metadata = {
  title: "Chi tiết danh mục",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

// firebase
import { ref, onValue } from "firebase/database";
import { Database } from '@/app/config/firebaseConfig'; // định nghĩa database mà mình đã định nghĩa trong file config

export default async function CategoryDetailPage(props: any) {
  // lấy ID của danh mục 
  const { id } = await props.params;                        

  //  Lấy thông tin của danh mục theo ID
  let infoCard: any = null;
  onValue(ref(Database, '/categories/' + id), item => infoCard = item.val());

  // Lấy danh sách bài nhạc thuộc về danh mục
  let songs: any[] = [];
  const songsRef = ref(Database, 'songs');  // url
  onValue(songsRef, items => {
    items.forEach( (item) => {
      const songId    = item.key;
      const songData  = item.val();
      // nếu bài nhạc này thuộc danh mục thì sẽ lấy nó
      if(songData.categoryId === id) {

        // lấy tác giả bài nhạc
        let singerData: string = "";
        songData.singerId.forEach( (singerId: string, index: number) => {
          onValue(ref(Database, '/singers/' + singerId), singer => {
            singerData += singer.val().title;
            if(index != songData.singerId.length - 1) singerData += ", "
          });
        });

        songs.push({
            id:     songId,
            image:  songData.image,
            title:  songData.title,
            singer: singerData,
            link:   `/song/${songId}`,  // đường dẫn để vào chi tiết bài nhạc
            time:   `5:32`              // fix cứng thời gian
          })
      }
    });
  });

  return (
      <>
        {/* card info */}
        <CardInfo 
          image = {infoCard?.image}
          title = {infoCard?.title}
          description = {infoCard?.description}
        />

        {/* Danh sách bài hát của danh mục */}
        <BoxTitle title="Danh Sách Bài Hát" className="" />
        <Song2 songs = {songs} />
      </>
    );
}
