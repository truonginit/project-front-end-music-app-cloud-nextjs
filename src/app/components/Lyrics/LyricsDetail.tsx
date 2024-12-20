export const LyricsDetail = ( props: { lyrics: string} ) => {
    const { lyrics } = props;

    return (
        <>
            <div className="w-full dark:bg-darkModePrimary rounded-[15px] dark:text-darkModeText p-[20px] whitespace-pre-line text-[14px] font-[500]">
                {lyrics}
            </div>
        </>
    );
}