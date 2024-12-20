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

export default function CategoryDetailPage() {
  const infoCard = {
    image: '/demo/100-nhac-tre.png',
    title: 'Nhạc Trẻ',
    desc:  'Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.'
  }

  return (
      <>
        {/* card info */}
        <CardInfo info={infoCard}/>

        {/* Danh sách bài hát của danh mục */}
        <BoxTitle title="Danh Sách Bài Hát" className="" />
        <Song2 />
      </>
    );
}
