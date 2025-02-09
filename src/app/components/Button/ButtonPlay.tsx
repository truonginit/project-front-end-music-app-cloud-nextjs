"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaPlay } from "react-icons/fa6";

export const ButtonPLay = (props: any) => {
    const { data } = props;

    // func xử lý khi play nhạc
    const handlePlay = () => {

        // hiển thị khối phát nhạc lên
        const playComponent: any = document.querySelector('.play-component');
        if(playComponent) {
            playComponent?.classList.add('play');

            // gửi thông tin bài nhạc lên khối phát nhạc, bao gồm: Hình ảnh, Tên bài hát, Tên ca sĩ
            const playInfoComponent: any = playComponent.querySelector('.playInfo-component');
            
            const playThumb = playInfoComponent.querySelector('.playThumb img');
            playThumb.src = data.image; // hình ảnh
            playThumb.alt = data.title;
            
            const playTitle = playInfoComponent.querySelector('.playTitle');
            const playTitleSpan = playTitle.querySelector('span');
            playTitle.href = `/song/${data.id}`;   // link đến chi tiết bài nhạc (chưa update được)
            playTitleSpan.innerHTML = data.title;  // tiêu đề bài nhạc
    
            // const playSinger = playInfoComponent.querySelector('.playSinger'); 
            
            // Khi phát nhạc sẽ hiển thị nút pause để dừng nhạc
            const outLineButton = playComponent.querySelector('.button-action');
            outLineButton.classList.add("play");
    
            // phát nhạc
            const audioElement = playComponent.querySelector('.audio');
            const sourceAudio: any  = audioElement.querySelector('source');
            sourceAudio.src = data.audio;
            audioElement.load();    // load nhạc từ source lên audio
            audioElement.play();    // phát nhạc

            // xóa active bài nhạc đang phát
            const songActioning: any = document.querySelector('[song-id].action');
            songActioning?.classList.remove('action');

            // active phần nghe nhiều đánh dấu bài nhạc mình đang phát
            const songAction: any = document.querySelector(`[song-id="${data.id}"]`);
            songAction.classList.add('action')
        }
    }
    return (
        <>
            <div 
                className="w-[34px] h-[34px] text-[16px] inline-flex justify-center items-center rounded-[50%] dark:text-darkModeText border-[1px] dark:border-darkModeText hover:dark:border-darkModeActive hover:dark:bg-darkModeActive hover:duration-1000"
                onClick={handlePlay}
                flag-for-action = "true"
            >
                <FaPlay />
            </div>
        </>
    );
}