/* eslint-disable @typescript-eslint/no-explicit-any */
// component
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
import { Section1 } from './section1';

import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Ứng dụng nghe nhạc trực tuyến",
};



export default async function ResultSearch() {
    return (
        <>
          <BoxTitle title="Kết Quả Tìm Kiếm" className="" />
          
          <Section1 />
          
        </>
      );
}
