// components
import { BannerContent } from "./BannerContent";
import { BannerImage } from "./BannerImage";

export const Banner = () => {
    return (
        <>
            {/* <div className="w-[545px] h-[361px]"> */}
            <div className="w-[545px] h-[361px]">
                <div // wrap
                    className="w-full h-full flex items-center bg-cover rounded-[15px]"
                    style={ {backgroundImage: "url('/demo/section-1-background-banner.png')"}}
                >
                    <BannerContent />
                    <BannerImage />
                </div>
            </div>
        </>
    );
}