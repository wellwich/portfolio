export type Work = {
    id: string;
    title: string;
    thumbnailSrc: string;
    imageSrc: string;
};

const data: Work[] = [
    {
        id: "1",
        title: "Raccoon and Vendor",
        thumbnailSrc: "https://images.wellwich.com/raccoon-vendor.webp",
        imageSrc: "https://images.wellwich.com/raccoon-vendor.webp",
    },
    {
        id: "2",
        title: "Talking Ocelot",
        thumbnailSrc: "https://images.wellwich.com/talking-ocelot.webp",
        imageSrc: "https://images.wellwich.com/talking-ocelot.webp",
    },
    {
        id: "3",
        title: "Steller",
        thumbnailSrc: "https://images.wellwich.com/steller_thumb.webp",
        imageSrc: "https://images.wellwich.com/steller.webp",
    }
];

export default data;