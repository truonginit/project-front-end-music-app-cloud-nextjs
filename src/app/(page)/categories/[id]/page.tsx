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
    return (
        <>
          {/* card info */}
          <CardInfo />

          {/* Danh sách bài hát của danh mục */}
          <BoxTitle title="Danh Sách Bài Hát" className="" />
          <Song2 />
        </>
      );
}
