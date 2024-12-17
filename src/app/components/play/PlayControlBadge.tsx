export const PlayControlBadge = () => {
    return (
        <>
             <div
                className="w-[218px] flex items-center gap-[12px]"
            >
                {/* hình ảnh */}
                <div className="" >
                    <img 
                        src="/demo/hoquanghieu-cophong.png" 
                        alt="" 
                    />
                </div>

                {/* wrap */}
                <div className="flex flex-col" >
                    {/* tên bài nhạc */}
                    <span
                        className="dark:text-darkModeText font-700 text-[15px] cursor-pointer"
                    >
                        Cô Phòng
                    </span>

                    {/* tên ca sĩ */}
                    <span className="dark:text-darkModeSubText font-700 text-[12px] cursor-pointer"> 
                        Hồ Giang Hiếu, Huỳnh Văn
                    </span>
                </div>
            </div>
        </>
    );
}