import { CardInfoImage } from "./CardInfoImage";

// interface của card info
interface InterfaceCardInfo {
    image: string,
    title: string,
    desc:  string,    
}

/* eslint-disable @next/next/no-img-element */
export const CardInfo = ( props: { info: InterfaceCardInfo} ) => {
    const { info } = props;

    return (
        <>
            <div className="flex items-center gap-x-[20px] mb-[30px]">
                <CardInfoImage image={info.image}/>
                {/* content */}
                <div className="flex-1">
                    <h3 className="text-[35px] font-[700] dark:text-darkModeActive mb-[10px]">
                        {info.title}
                    </h3>

                    <p className="text-[14px] font-[400] dark:text-darkModeSecondary">
                        {info.desc}
                    </p>
                </div>
            </div>
        </>
    );
}