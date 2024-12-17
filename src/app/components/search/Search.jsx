
// icon
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = () => {
    return (
        <>
            <form 
                action=""
                className="w-[100%] dark:bg-darkModePrimary rounded-[50px] overflow-hidden py-[12px] px-[32px] flex items-center gap-x-[20px]"
            >
                <input
                    type="search"
                    name="keyword"
                    placeholder="Tìm kiếm..."
                    className="flex-1 order-2 bg-transparent outline-none text-[15px] dark:text-darkModeText dark:placeholder-darkModeText"
                    defaultValue={""}
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