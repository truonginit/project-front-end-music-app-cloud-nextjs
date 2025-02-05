/* eslint-disable @typescript-eslint/no-explicit-any */
export const SongCenterItem2 = (props: any) => {
    const { singer } = props;
    return (
        <>
            <div className="w-[30%] text-center">
                <span className=" text-[14px] font-[400] dark:text-darkModeText ">
                    {singer}
                </span>
            </div>
        </>
    );
}