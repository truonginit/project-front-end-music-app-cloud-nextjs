/* eslint-disable @next/next/no-img-element */
export const CardInfoImage = ( props: { image: string} ) => {
    const { image } = props;
    return (
        <>
            <div className="w-[180px] aspect-square rounded-[15px] truncate">
                <img 
                    src={image}
                    alt="nhactre"
                    className="w-full object-cover"
                />
            </div>
        </>
    );
}