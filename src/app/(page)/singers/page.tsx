import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { Card } from "@/app/components/Card/Card";
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function SingerPage() {
    return (
        <>
          <BoxTitle title="Danh Sách Ca Sĩ" className=""/>

          <Card className="" />
        </>
      );
}
