export interface ProjectsEntity {
    id: string;
    sections: SectionProject[];
    timeCreated: string;
    title: string;
}

interface SectionProject {
    contents: Array<string>;
    images: {
        uid: string;
        url: string;
    }[];
}
