import type { Metadata } from "next";

// components
import { Section1 } from './components/Section1/Section1';
import { Section2 } from './components/Section2/Section2';
import { Section3 } from './components/Section3/Section3';

// Metadata
export const metadata: Metadata = {
  title: "Music AppCloud",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function Home() {
  return (
    <>
      <Section1 />  {/* banner + nghe nhiều */}
      <Section2 />  {/* danh mục nổi bật */}
      <Section3 />  {/* ca sĩ nổi bật */}
    </>
  );
}
