// components
import { BannerContent } from "./BannerContent";

export const Banner = () => {
    return (
        <>
            <div className="w-[545px] h-[361px]">
                <div // wrap
                    className="w-full h-full flex items-center bg-cover rounded-[15px]"
                    style={ {backgroundImage: "url('/demo/section-1-background-banner.png')"}}
                >
                    <BannerContent />

                    {/* banner image singer */}
                    <div className="w-[215px] mr-[23px] mt-[44px]">
                        <img 
                            src="/demo/section-1-background-banner-user.png" 
                            alt="Banner Nhạc EDM"
                            className="w-full h-full inline-block"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}