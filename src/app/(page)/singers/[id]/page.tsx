import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { CardInfo } from "@/app/components/Card/CardInfo";
import { Song2 } from "@/app/components/Song2/Song2";
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function SingerDetailPage() {

    // thông tin ca sĩ
    const infoCard = {
      image: '/demo/sontung-mtp.png',
      title: 'Sơn Tùng M-TP',
      desc:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }

    return (
        <>
          <CardInfo info={infoCard} />

          {/* Danh sách bài hát */}
          <BoxTitle title="Danh Sách Bài Hát" className="" />

          <Song2 />
        </>
      );
}
