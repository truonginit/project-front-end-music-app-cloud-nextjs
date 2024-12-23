/* eslint-disable @next/next/no-img-element */

export const SongImageItem = (props: { img: string }) => {
    const { img } = props;
    return (
        <>
            <div className={"aspect-square rounded-[10px] w-[76px] h-[76px] truncate"}>
                <img 
                    src={img} 
                    alt="cô phòng"
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    ); 
}