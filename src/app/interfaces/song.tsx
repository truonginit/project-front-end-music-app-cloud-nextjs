// interface
export interface SingerOfSong {
    title: string,
    href: string,
}

export interface Song {
    id: string,
    categoryId?: string,
    singers: SingerOfSong[],
    title: string,
    image: string,
    lyrics?: string,
    listen: number
}
