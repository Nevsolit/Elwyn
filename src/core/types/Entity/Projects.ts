export interface ProjectsEntity {
    id: string;
    sections: SectionProject[];
    timeCreated: string;
    title: string;
    description: string;
}

interface SectionProject {
    contents: Array<string>;
    images: {
        uid: string;
        url: string;
    }[];
}
