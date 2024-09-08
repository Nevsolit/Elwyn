export type HeaderSettings = {
    id: string;
    logoPath: string;
    logoUrl: string;
    navLinks: {
        id: string;
        isActive: boolean;
        title: string;
        url: string;
    }[];
};

export type InformationDetail = {
    avatar: string;
    description: string;
    id: string;
    items: {
        buttonLabel: string;
        description: string;
        link: string;
        tag?: string;
        title: string;
        image: string;
    }[];
    title: string;
    titleContact: string;
}