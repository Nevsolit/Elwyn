export interface ProjectsEntity {
    id: string;
    sections: SectionProject[];
    timeCreated: string;
    title: string;
    description: string;
    introduceRole: string;
    myRole: string;
    platform: string;
    problem: string;
    timeLine: string;
}

interface SectionProject {
    contents: Array<string>;
    images: {
        uid: string;
        url: string;
    }[];
}
