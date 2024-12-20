/* eslint-disable @next/next/no-img-element */
export const CardImageItem = () => {
    return (
        <>
            <div className='w-full aspect-square rounded-[15px] truncate mb-[10px]'>
                <img 
                    src="/demo/100-nhac-tre.png"
                    alt=""
                    className='w-full h-full object-cover'
                />
            </div>
        </>
    );
}

// truncate ~ overflow: hidden