import type { Metadata } from "next";
import "./globals.css";

// components
import { Sider } from './components/Sider/Sider';
import { Search } from './components/Search/Search';
import { Play } from './components/Play/Play';

// Metadata
export const metadata: Metadata = {
  title: "Music AppCloud",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="vi" className="dark">
      <body className="dark:bg-darkModeBackground">
        <div className="container md:mx-auto mx-[0px]"> {/* container */}
          {/* Sider & Search & Nội Dung Chính */}
          <div className="flex"> {/* wrap */}
              <Sider/>  {/* sider */}
                <main className="flex-1 ml-[20px]  mt-[20px] mb-[100px]"> 
                  <Search /> {/* khung tìm kiếm */}
                  {children} {/* nội dung chính */}
                </main>
          </div>
        </div>

        {/* khối phát nhạc */}
        <div className="dark:bg-darkModePrimary border-t-[1px] dark:border-darkModeBorder fixed bottom-0 w-full">
          <div className="container mx-auto">
            <Play /> {/* play music */}
          </div>
        </div>
        
      </body>
    </html>
  );
}
