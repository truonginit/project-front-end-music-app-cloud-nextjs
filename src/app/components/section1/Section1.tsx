// components
import { Banner } from "../Banner/Banner";
import { Song } from '../Song/Song';

export const Section1 = () => {
    return (
        <>
            <div className="flex items-end mb-[30px]" > {/* wrap */}
                <Banner />
                <Song />  {/* nghe nhiều */}
            </div>
        </>
    );
}