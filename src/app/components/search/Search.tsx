/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useRouter, useSearchParams } from "next/navigation";
// icon
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = () => {
    const router = useRouter(); // router nextjs
    const searchParams = useSearchParams(); // search params nextjs
    
    // khi chuyển đến trang /search chắc chắn sẽ kèm theo query (?) ta sẽ lấy nó
    const keywordParams: string = searchParams.get('keyword') || "";

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const keyword: string = event.target.keyword.value; // lấy keyword trên thanh tìm kiếm
        
        // khi có keyword rồi. 
        // Dù đang ở bất cứ trang nào thì sẽ vẫn chuyển hướng sang trang tìm kiếm /search
        const href: string = `/search?keyword=${keyword}`;
        router.push(href);
    }

    return (
        <>
            <form 
                onSubmit={handleSubmit}
                action=""
                className="w-[100%] dark:bg-darkModePrimary rounded-[50px] overflow-hidden py-[12px] px-[32px] flex items-center md:gap-x-[20px] gap-x-[10px] mb-[30px]"
                
            >
                <input
                    type="search"
                    name="keyword"
                    placeholder="Tìm kiếm..."
                    className="flex-1 order-2 bg-transparent outline-none md:text-[15px] text-[13px] font-400 dark:text-darkModeText dark:placeholder-darkModeText"
                    defaultValue={keywordParams}
                >
                </input>

                <button 
                    type="submit"
                    className="order-1 text-[18px] dark:text-darkModeText"
                >
                    <FaMagnifyingGlass />
                </button>
            </form>
        </>
    );
}