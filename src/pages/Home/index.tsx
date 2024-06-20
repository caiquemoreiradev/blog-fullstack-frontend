import { useEffect, useState } from "react";
import { Header } from "../../components/Header"
import { Post } from "../../components/Post"
import { PostProps } from "../../@types/Post";

import './styles.css';

export const Home = () => {

    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {

        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

    return (
        <section>
            <Header />

            <main className="posts">
                {posts.length > 0 ? posts.map(post => (
                    <Post key={post._id} post={post} />
                )) : (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                        <h3>There's not posts yet</h3>
                    </div>
                )}
            </main>
        </section>
    )
}