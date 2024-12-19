import type { Metadata } from "next";

// components
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { CardItem } from "@/app/components/Card/CardItem";

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

            <div className="grid grid-cols-5">
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>
              
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>

            </div>
          </div>
        </>
      );
}
