/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export const PlayControlTimeLine = () => {
    // kéo thả cái range, kiểu như thay đổi ngay cái chổ phát nhạc
    const handleRange = (event: any) => {
        const audioElement: any  = document.querySelector('.audio');
        // update current bài nhạc hiện tại
        const newTime = event.target.value;              // thời gian trên thanh range
        audioElement.currentTime = newTime;

        // console.log(`newTimeStep:::${newTime}`);
    }

    return (
        <>
            <div className="mt-[11px] relative audio-timeline" >
                {/* thanh màu, w-[0%] mặc định nó nằm ở đầu line */}
                <div 
                    className="h-[4px] w-[0%] rounded-[50px] dark:bg-darkModeActive absolute left-[0] top-[13.5px]"
                    timeline-move="true"
                >
                </div>

                {/* thanh input */}
                <input 
                    type="range"
                    name="timeline"
                    min={0}
                    max={0}
                    defaultValue={0} 
                    step={0.0001}
                    className="w-full h-[4px] cursor-pointer appearance-none range-music rounded-[50px] dark:bg-[#FFFFFF0A]"
                    onChange={handleRange}
                />
            </div>
        </>
    );
}

// appearance-none: dùng để xóa css mặc định của element