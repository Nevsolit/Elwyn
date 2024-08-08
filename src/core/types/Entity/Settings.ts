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
