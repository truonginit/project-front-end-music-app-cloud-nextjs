/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// icon
import { FaBackwardStep, FaPlay, FaForwardStep, FaPause } from "react-icons/fa6";

export const PlayControlButton = () => {
    // xử lý sự kiện khi click vào nút play / pause
    const handlePlay = () => {
        const outLineButton = document.querySelector('.button-action');
        const audioElement: any = document.querySelector('.audio');

        // nếu có class .play => ẩn nút pause hiển thị nút play => dừng phát nhạc
        if(outLineButton?.classList.contains('play')) {
            outLineButton.classList.remove('play');
            audioElement.pause();   // dừng nhạc
            
            // xóa active bài nhạc đang phát
            const songActioning: any = document.querySelector('[song-id].action');
            songActioning?.classList.remove('action');
        }

        else {
            outLineButton?.classList.add('play');
            audioElement.play();    // phát nhạc
        }

    }

    // Bài nhạc kế tiếp
    const handleNext = () => {
        // lấy node mà bài nhạc đang phát
        const songActioning: any = document.querySelector('[song-id].action');
        if(songActioning) {
            const nextToSong = songActioning.nextSibling;   // lấy node (bài hát kế tiếp)

            // nếu có bài nhạc kế tiếp
            if(nextToSong) {
                // tìm nút play của node (bài nhạc đó) rồi click
                const buttonPlayOfNextSong = nextToSong.querySelector('[flag-for-action]');
                buttonPlayOfNextSong.click();
            }
        }
    }

    // Bài nhạc trước list
    const handlePrevious = () => {
        // lấy node mà bài nhạc đang phát
        const songActioning: any = document.querySelector('[song-id].action');
        if(songActioning) {
            const nextToSong = songActioning.previousSibling ;   // lấy node (bài hát kế tiếp)

            // nếu có bài nhạc kế tiếp
            if(nextToSong) {
                // tìm nút play của node (bài nhạc đó) rồi click
                const buttonPlayOfNextSong = nextToSong.querySelector('[flag-for-action]');
                buttonPlayOfNextSong.click();
            }
        }
    }
    return (
        <>
            <div className="flex justify-center gap-[42px]">
                <button className="dark:text-darkModeText" onClick={handlePrevious}>
                    <FaBackwardStep />
                </button>
                <button 
                    className="dark:text-darkModeText inline-flex justify-center items-center dark:bg-darkModeActive w-[32px] h-[32px] rounded-[50%] button-action"
                    onClick={handlePlay}
                >
                    <FaPlay title="play"   className="button-play"  />
                    <FaPause title="pause" className="button-pause" />
                </button>
                <button className="dark:text-darkModeText" onClick={handleNext}>
                    <FaForwardStep />
                </button>
            </div>
        </>
    );
}