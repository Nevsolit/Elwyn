export interface BlogPost {
    id?: string;
    title: string;
    tags: 'blog' | 'learn-about' | 'work' | 'introduce' | 'goals' | 'life' ;
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