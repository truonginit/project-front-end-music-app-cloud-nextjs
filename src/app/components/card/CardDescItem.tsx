export const CardDescItem = ( props: { description: string }) => {
    const { description } = props;
    return (
        <>
            <p className="text-[12px] font-[400] line-clamp-1 dark:text-darkModeSubText">
                {description}
            </p>
        </>
    );
}