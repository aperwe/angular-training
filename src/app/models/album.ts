interface Entity {
    id: string;
    name: string;
}

export interface Album extends Entity {
    images: AlbumImage[];
    artists?: Artist[];
}

export interface AlbumImage {
    url: string;
    width: number;
    height: number;
}

export interface Artist extends Entity { }