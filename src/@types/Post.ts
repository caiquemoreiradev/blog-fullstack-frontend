export interface PostProps {
    _id: string;
    title: string;
    summary: string;
    content: string;
    cover: string;
    category: string;
    createdAt: string;
    author: { username: string };
}