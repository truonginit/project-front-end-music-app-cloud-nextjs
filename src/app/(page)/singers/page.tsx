/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxTitle } from "@/app/components/BoxTitle/BoxTitle";
// import { Card } from "@/app/components/Card/Card";
import { Section1 } from './section1';
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Danh sách ca sĩ",
  description: "Ứng dụng nghe nhạc trực tuyến",
};


export default async function SingerPage() {
  return (
      <>
        <BoxTitle title="Danh Sách Ca Sĩ" className=""/>
        <Section1 />
      </>
    );
}
