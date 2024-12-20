import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { Song2 } from "@/app/components/Song2/Song2";
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Danh sách bài hát yêu tích",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function Register() {
    return (
        <>
          <BoxTitle title="Bài Hát Yêu Thích" className="" />

          <Song2 />
        </>
      );
}
