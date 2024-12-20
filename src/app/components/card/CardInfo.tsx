import { CardInfoImage } from "./CardInfoImage";

/* eslint-disable @next/next/no-img-element */
export const CardInfo = () => {
    return (
        <>
            <div className="flex items-center gap-x-[20px] mb-[30px]">
                <CardInfoImage />
                {/* content */}
                <div className="flex-1">
                    <h3 className="text-[35px] font-[700] dark:text-darkModeActive mb-[10px]">
                        Nhạc Trẻ
                    </h3>

                    <p className="text-[14px] font-[400] dark:text-darkModeSecondary">
                        Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia
                        sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.
                    </p>
                </div>
            </div>
        </>
    );
}