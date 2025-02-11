/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// components
import { PlayControlBadge } from './PlayControlBadge';
import { PlayControlMain } from './PlayControlMain';
import { PlayControlVolume } from './PlayControlVolume';

export const Play = () => {
    // khi bài nhạc đã load lên file audio
    const handleLoad = () => {
        const audioElement: any  = document.querySelector('.audio');
        const timelineElement    = document.querySelector('.audio-timeline');
        const timeLineMove:  any = timelineElement?.querySelector('[timeline-move]');
        const timelinePoint: any =  timelineElement?.querySelector('input[name="timeline"]');
        const outLineButton = document.querySelector('.button-action');

        const totalTime     = audioElement?.duration;    // tổng thời lượng của bài hát, tính bằng giây
        
        timelinePoint.max = totalTime;  // đặt max cho range input
        // timelinePoint.max = parseInt(totalTime);  // đặt max cho range input
        // console.log(`timeMax:::${timelinePoint.max}`);

        // lấy thời gian mà bài nhạc đã phát đến hiện tại
        audioElement.ontimeupdate = () => {
            const currentTime = audioElement.currentTime; // thời gian mà bài nhạc đã phát được, tính bằng giây
            
            // tính toán tỉ lệ
            const percent = (currentTime / totalTime) * 99.90;     // cái 99 này là do mình tự fix. để nó vừa với cái point của input type range
            timeLineMove.style.width = `${percent}%`;           // thanh màu nhạc đã đi đến đâu
            timelinePoint.value = currentTime;                  // chính là cái có chấm RANGE 
            

            // khi kết thúc bài nhạc thì sẽ thay nút pause thành nút play
            if(currentTime === totalTime)
                outLineButton?.classList.remove('play');
        }
    }

    return (
        <>
            <div 
                className="flex items-center justify-between py-[12.4px] play-component"
            >   
                {/* thẻ này để truyền nội dung phát nhạc vào không cần hiển thị nha */}
                <audio 
                    className='hidden audio'
                    onLoadedMetadata={handleLoad}
                >
                    <source  src='/' type='audio/mp3'/>
                </audio>
                
                {/* wrap */}
                <PlayControlBadge />

                <PlayControlMain />

                <PlayControlVolume />
            </div>
        </>
    );
}