import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Music AppCloud",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function Home() {
  return (
    <>
      <h1 
        className="dark:bg-darkModeBg text-white"
      >
        TRANG CHỦ
      </h1>
    </>
  );
}
