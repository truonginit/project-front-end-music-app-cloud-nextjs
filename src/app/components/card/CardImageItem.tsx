/* eslint-disable @next/next/no-img-element */
export const CardImageItem = (props: { img: string }) => {
    const { img } = props;
    return (
        <>
            <div className='w-full aspect-square rounded-[15px] truncate mb-[10px]'>
                <img 
                    src={img}
                    alt=""
                    className='w-full h-full object-cover'
                />
            </div>
        </>
    );
}

// truncate ~ overflow: hidden