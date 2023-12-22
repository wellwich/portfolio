import { IconDefinition, faPixiv, faXTwitter, faDeviantart, faTumblr } from "@fortawesome/free-brands-svg-icons";

export type Link = {
    id: string;
    title: string;
    url: string;
    icon: IconDefinition;
};

const links: Link[] = [
    {
        id: "1",
        title: "X",
        url: "https://www.x.com/wellwich",
        icon: faXTwitter
    },
    {
        id: "2",
        title: "pixiv",
        url: "http://pixiv.me/wellwich",
        icon: faPixiv
    },
    {
        id: "3",
        title: "deviantart",
        url: "https://www.deviantart.com/wellwich",
        icon: faDeviantart
    },
    {
        id: "4",
        title: "tumblr",
        url: "https://www.tumblr.com/wellwich0505",
        icon: faTumblr
    },
];

export default links;