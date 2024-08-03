export interface BlogPost {
    id?: string;
    title: string;
    sections: BlogSection[];
    timeCreated: string;
}

interface BlogSection {
    key: string;
    images: {
        uid: any;
        url: string;
    }[];
    contents: string[];
}