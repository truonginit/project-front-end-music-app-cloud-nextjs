/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const PlayControlBadge = () => {
    return (
        <>
             <div
                className="w-[218px] flex items-center gap-[12px] playInfo-component"
            >
                {/* hình ảnh */}
                <div className="w-[50px] h-[50px] aspect-square overflow-hidden rounded-[14px] playThumb" >
                    <img 
                        className="w-full h-full"
                        src="/demo/hoquanghieu-cophong.png" 
                        alt="" 
                    />
                </div>

                {/* wrap */}
                <div className="flex flex-1 flex-col" >
                    {/* tên bài nhạc */}
                    <Link 
                        href='/'
                        passHref = {true}
                        className="playTitle group"
                    >
                        <span   
                            className="group-hover:text-darkModeActive dark:text-darkModeText font-700 text-[15px] cursor-pointer transition group-hover:duration-700 "
                        >
                            Cô Phòng
                        </span>
                    </Link>


                    {/* tên ca sĩ */}
                    <span className="dark:text-darkModeSubText font-700 text-[12px] cursor-pointer playSinger"> 
                        Hồ Giang Hiếu, Huỳnh Văn
                    </span>
                </div>
            </div>
        </>
    );
}