/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { CardInfo } from "@/app/components/Card/CardInfo";
import { Lyrics } from "@/app/components/Lyrics/Lyrics";
import { Song2 } from "@/app/components/Song2/Song2";
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

// firebase
import { ref, get } from "firebase/database";
import { Database } from '@/app/config/firebaseConfig'; // định nghĩa database mà mình đã định nghĩa trong file config

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

// Lấy chi tiết bài nhạc theo ID của bài nhạc đó
const getInfoSongById = async (songId: string) => {
  const resultSong = await get(ref(Database, '/songs/' + songId));
  const song   = await resultSong.val();
  // const songID = await resultSong.key

  // lấy tên ca sĩ trình diễn bài nhạc
  song['description'] = await getSingerOfSongById(song.singerId);
  return song;
}

// Lấy các bài nhạc thuộc cùng danh mục nhưng khác songId được truyền vào
const getListSongDiff = async (songId: string, categoryId: string) => {
  const result = await get(ref(Database, 'songs'));
  const raws: any[] = [];
  result.forEach((item) => { raws.push({ songId: item.key, ...item.val() }) });
  
  const songs: any[] = []; // mảng kết quả những bài hát cùng danh mục
  for(const item of raws) {
    const singer = await getSingerOfSongById(item.singerId);  // lấy ca sĩ trình diễn

    // không đưa bài hát đang hiển thị vào danh mục này vì không cần thiết
    // và bài hát được đưa vào phải có cùng danh mục
    if(item.songId !== songId && item.categoryId === categoryId) {
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

export default async function SongDetailPage(props: any) {
  const { id } = await props.params;  // lấy id từ thanh params

  // dựa vào ID lấy info chi tiết bài nhạc (song)
  const song = await getInfoSongById(id);

  // lấy các bài hát có cùng danh mục (songs)
  const songs = await getListSongDiff(id, song.categoryId);

  console.log(`lyrics:::`, song.lyric);
  const lyrics = song.lyric;
  console.log(`lyrrics:: ${lyrics}`);
  return (
      <>
        {/* card info */}
        <CardInfo 
          image = {song?.image}
          title = {song?.title}
          description = {song?.description}
        />

        {/* Lời bài nhạc */}
        <Lyrics lyrics={song?.lyric}/>

        {/* Bài hát cùng danh mục */}
        <BoxTitle title="Bài Hát Cùng Danh Mục" className="" />
        <Song2 songs = {songs} />
      </>
    );
}


// data mẫu
// // thông tin bài nhạc
// const infoCard = {
//   image: '/demo/100-nhac-tre.png',
//   title: 'Cô Phòng',
//   desc:  'Hồ Quang Hiếu, Huỳnh Văn'
// }

// // lời bài nhạc
// const lyrics: string = `Verse:
// Níu ngàn lời cũng không ngăn được
// Bàn chân bước đi không báo trước
// Có những điều cất riêng trong lòng
// Giờ bốn vách ngăn cùng cô phòng
// Trốn chạy rồi hàn huyên với men
// Cứ thế kết thân cùng ánh đèn
// Lối mòn ngày nào trên phố quen
// Vẫn đó dáng hình ngày người đến
// Pre:
// Rời xa, lòng đau, chết trong cơn u sầu
// Liệu rằng tình đời ai sẽ thấu
// Dĩ vãng xưa vẫn in sâu trong đầu
// (hah a hah)
// Chorus:
// Thời gian không thể xoá nhoà đôi ta
// Có chăng chỉ là mờ phai đi theo tháng năm
// Rồi khi tỉnh giấc mới chợt nhận ra
// Thật quá khó để quên đi một người
// Màn đêm u tối bao trùm không gian
// Nói thay tiếng lòng này từ lâu đã vỡ tan
// Thì ra duyên kiếp để mình gặp nhau
// Dạy nhau tốt hơn xong dành lại cho người sau…
// `