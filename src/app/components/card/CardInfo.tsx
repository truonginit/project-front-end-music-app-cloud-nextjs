/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInfoImage } from "./CardInfoImage";

/* eslint-disable @next/next/no-img-element */
export const CardInfo = async ( props: any ) => {
    const { image, title, description } = props;
    return (
        <>
            <div className="flex items-center gap-x-[20px] mb-[30px]">
                <CardInfoImage image={image}/>
                {/* content */}
                <div className="flex-1">
                    <h3 className="text-[35px] font-[700] dark:text-darkModeActive mb-[10px]">
                        {title}
                    </h3>

                    <p className="text-[14px] font-[400] dark:text-darkModeSecondary">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}