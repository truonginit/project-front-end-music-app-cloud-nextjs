import type { Metadata } from "next";

// components
import { Section1 } from './components/section1/Section1';

// Metadata
export const metadata: Metadata = {
  title: "Music AppCloud",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function Home() {
  return (
    <>
      <Section1 />
    </>
  );
}
