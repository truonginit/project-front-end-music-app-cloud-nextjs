
export const PlayControlTimeLine = () => {
    return (
        <>
            <div className="mt-[11px] relative" >
                {/* thanh màu */}
                <div className="h-[4px] w-[80%] rounded-[50px] dark:bg-darkModeActive  absolute left-0 top-[13.3px]"></div>

                {/* thanh input */}
                <input 
                    type="range"
                    name="timeline"
                    min={0}
                    max={100}
                    defaultValue={80} 
                    className="w-full h-[4px] cursor-pointer appearance-none range-music rounded-[50px] dark:bg-[#FFFFFF0A]"
                />
            </div>
        </>
    );
}

// appearance-none: dùng để xóa css mặc định của element