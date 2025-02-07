import type { Metadata } from "next";

// components
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { Section1 } from "./section1";
// Metadata
export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function CategoryPage() {

  return (
      <>
        <div>
          <BoxTitle title="Danh mục bài hát" className=""/>
          <Section1 />
        </div>
      </>
    );
}
