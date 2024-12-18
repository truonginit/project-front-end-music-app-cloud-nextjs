// components
// import Image from 'next/image'

export const CardItem = () => {
    return (
        <>
            <div className="w-[180px]">
                {/* image */}
                <div className='mb-[10px]'>
                    <img 
                        src="/demo/100-nhac-tre.png"
                        alt=""
                        className='w-full h-full'
                    />
                </div>

                {/* content */}
                <div>
                    <h3 className="text-[14px] font-700 dark:text-darkModeText mb-[10px]" >
                        Nhạc trẻ
                    </h3>
                    <p className="text-[12px] font-400 line-clamp-1 dark:text-darkModeSubText">
                        Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ
                    </p>
                </div>
            </div>
        </>
    ); 
}