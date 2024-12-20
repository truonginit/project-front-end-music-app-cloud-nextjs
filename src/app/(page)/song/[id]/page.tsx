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

export default function CategoryDetailPage() {
  
  // thông tin bài nhạc
  const infoCard = {
    image: '/demo/100-nhac-tre.png',
    title: 'Cô Phòng',
    desc:  'Hồ Quang Hiếu, Huỳnh Văn'
  }

  // lời bài nhạc
  const lyrics: string = `Verse:
    Níu ngàn lời cũng không ngăn được
    Bàn chân bước đi không báo trước
    Có những điều cất riêng trong lòng
    Giờ bốn vách ngăn cùng cô phòng
    Trốn chạy rồi hàn huyên với men
    Cứ thế kết thân cùng ánh đèn
    Lối mòn ngày nào trên phố quen
    Vẫn đó dáng hình ngày người đến
    Pre:
    Rời xa, lòng đau, chết trong cơn u sầu
    Liệu rằng tình đời ai sẽ thấu
    Dĩ vãng xưa vẫn in sâu trong đầu
    (hah a hah)
    Chorus:
    Thời gian không thể xoá nhoà đôi ta
    Có chăng chỉ là mờ phai đi theo tháng năm
    Rồi khi tỉnh giấc mới chợt nhận ra
    Thật quá khó để quên đi một người
    Màn đêm u tối bao trùm không gian
    Nói thay tiếng lòng này từ lâu đã vỡ tan
    Thì ra duyên kiếp để mình gặp nhau
    Dạy nhau tốt hơn xong dành lại cho người sau…
  `
  return (
      <>
        {/* card info */}
        <CardInfo info={infoCard} />

        {/* Lời bài nhạc */}
        <Lyrics lyrics={lyrics}/>

        {/* Bài hát cùng danh mục */}
        <BoxTitle title="Bài Hát Cùng Danh Mục" className="" />
        <Song2/>
      </>
    );
}
