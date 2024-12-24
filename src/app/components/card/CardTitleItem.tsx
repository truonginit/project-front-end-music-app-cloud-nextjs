export const CardTitleItem = (props: { title: string }) => {
    const { title } = props;

    return (
        <>
            <h3 className="text-[14px] font-[700] line-clamp-1 dark:text-darkModeText mb-[10px] group-hover:dark:text-darkModeActive group-hover:duration-1000" >
                {title}
            </h3>
        </>
    );
}