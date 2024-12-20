import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { Song2 } from "@/app/components/Song2/Song2";
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function ResultSearch() {
    return (
        <>
          <BoxTitle title="Kết Quả Tìm Kiếm" className="" />
          
          <Song2 />
        </>
      );
}
