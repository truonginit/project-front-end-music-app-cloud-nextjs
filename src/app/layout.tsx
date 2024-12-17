import type { Metadata } from "next";
import "./globals.css";

// components
import { Sider } from './components/sider/Sider';
import { Search } from './components/search/Search';
import { Play } from './components/play/Play';

// Metadata
export const metadata: Metadata = {
  title: "Music AppCloud",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="vi" className="dark">
      <body className="dark:bg-darkModeBackground">
        <div className="container mx-auto"> {/* container */}
          <div className="flex"> {/* wrap */}
              <Sider/>
              <main className="flex-1 ml-[20px] mt-[20px]"> 
                <Search /> {/* khung tìm kiếm */}
                {children} {/* nội dung chính */}
              </main>
          </div>
        </div>
        <Play /> {/* play music */}
      </body>
    </html>
  );
}
