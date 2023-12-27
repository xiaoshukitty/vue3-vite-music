
export interface Album {
    songs: any[];
    paid: boolean;
    onSale: boolean;
    mark: number;
    blurPicUrl: string;
    companyId: number;
    alias: string[];
    artists: Artist[];
    copyrightId: number;
    picId: number;
    artist: Artist;
    publishTime: number;
    company: string;
    briefDesc: string;
    picUrl: string;
    commentThreadId: string;
    pic: number;
    tags: string;
    description: string;
    status: number;
    subType: string;
    name: string;
    id: number;
    type: string;
    size: number;
    picId_str: string;
}

export interface Artist {
    albumSize: number;
    alias: string[];
    briefDesc: string;
    fansCount: number;
    followed: boolean;
    id: number;
    img1v1Id: number;
    img1v1Id_str: string;
    img1v1Url: string;
    musicSize: number;
    name: string;
    picId: number;
    picId_str: string;
    picUrl: string;
    topicPerson: number;
    trans: string;
}

export interface Mv {
    id: number;
    name: string;
    status: number;
    artistName: string;
    artist: Artist;
    imgurl16v9: string;
    imgurl: string;
    duration: number;
    playCount: number;
    publishTime: string;
    subed: boolean;
}
