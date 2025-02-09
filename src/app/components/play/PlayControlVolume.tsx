/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// icon
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export const PlayControlVolume = () => {
    // thanh chỉnh volume
    const handleVolume = (event: any) => {
        const audioElement: any  = document.querySelector('.audio');
        const volumeMove: any = document.querySelector('[volume-move]');
        const volumeRange: any = document.querySelector('input[name="volume"]');
        const volumeIcon: any = document.querySelector('.icon-volume');
        
        const currentVolume = parseInt(event.target.value);   // mức trên thanh range

        // cập nhật volume của audio
        audioElement.volume = currentVolume/100;
        
        // thay đổi range trên giao diện
        // tính toán tỉ lệ
        volumeMove.style.width = `${currentVolume}%`;           // thanh màu nhạc đã đi đến đâu
        volumeRange.value = currentVolume;                  // chính là cái có chấm RANGE
        
        // nếu volume về 0 => thì hiện mutex volume => tức là volume bị bắt
        if(currentVolume === 0) {
            volumeIcon.classList.add('mutex');
        }

        else {
            volumeIcon.classList.remove('mutex');
        }
    }

    // khi click vào kí hiệu volume
    const handleRotate = (event: any) => {
        const audioElement: any  = document.querySelector('.audio');
        const volumeMove: any = document.querySelector('[volume-move]');
        const volumeRange: any = document.querySelector('input[name="volume"]');
        const volumeIcon: any = document.querySelector('.icon-volume');

        // nếu có mutex tức là đang bật âm thanh
        if(volumeIcon.classList.contains('mutex')) {
            audioElement.volume = 1;  
            volumeMove.style.width = `100%`;           // thanh màu nhạc đã đi đến đâu
            volumeRange.value = 100;                  // chính là cái có chấm RANGE
            volumeIcon.classList.remove('mutex');
        }

        else {
            audioElement.volume = 0;  
            volumeMove.style.width = `0%`;           // thanh màu nhạc đã đi đến đâu
            volumeRange.value = 0;                  // chính là cái có chấm RANGE
            volumeIcon.classList.add('mutex');
        }
    }
    return (
        <>
            <div className="w-[184px] flex items-center gap-[6px]">
                {/* icon volum */}
                <div className="text-[20px] dark:text-darkModeText icon-volume cursor-pointer" onClick={handleRotate}>
                    <FaVolumeUp     className="volume-up"/>
                    <FaVolumeMute   className="volume-mute"/> 
                </div>
                
                {/*  */}
                <div className="relative flex" >
                    {/* thanh màu */}
                    <div 
                        className="h-[4px] w-[100%] rounded-[50px] dark:bg-darkModeActive  absolute left-0 top-[0px]"
                        volume-move="true"
                    >
                    </div>

                    {/* thanh input */}
                    <input 
                        type="range"
                        name="volume"
                        min={0}
                        max={100}
                        defaultValue={100} 
                        className="w-full h-[4px] cursor-pointer appearance-none range-music rounded-[50px] dark:bg-[#FFFFFF0A]"
                        onChange={handleVolume}
                    />
            </div>
                
            </div>
        </>
    );
}