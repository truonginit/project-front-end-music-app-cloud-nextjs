// interface section 1
export interface SingerInterface {
    title: string,
    href: string,
}

export interface SongInterface {
    id: string,
    categoryId?: string,
    singers: SingerInterface[],
    title: string,
    image: string,
    lyrics?: string,
    listen: number
}