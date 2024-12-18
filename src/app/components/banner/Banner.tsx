// components
import { BannerContent } from "./BannerContent";

export const Banner = () => {
    return (
        <>
            <div className="xl:w-[545px] w-full h-[361px] xl:mb-[0px] mb-[10px]">
                <div // wrap
                    className="w-full h-full flex md:flex-row flex-col items-center bg-cover rounded-[15px]"
                    style={ {backgroundImage: "url('/demo/section-1-background-banner.png')"}}
                >
                    <BannerContent />

                    {/* banner image singer */}
                    <div className="md:w-[215px] md:h-auto h-[250px] md:mr-[23px] md:mt-[44px]">
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