export interface BlogPost {
    id?: string;
    title: string;
    tags: string;
    sections: BlogSection[];
    timeCreated: string;
    timeUpdated: string;
    status: "new" | "popular" | "trending" 
}

interface BlogSection {
    key: string;
    images: {
        uid: any;
        url: string;
    }[];
    contents: string[];
}