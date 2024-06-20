import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PostProps } from "../../@types/Post";

import { Header } from "../../components/Header"

import './styles.css'
import moment from "moment";

export const PostDetails = () => {

    const [postInfo, setPostInfo] = useState({} as PostProps);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);

    return (
        <section>
            <Header />

            <section className="post__details__container">
                <h1>{postInfo.title}</h1>

                <div className="author__info">

                    <div>
                        {postInfo.author && <strong>by @{postInfo.author.username}</strong>}
                        <p>{moment(postInfo.createdAt).format('llll')}</p>
                    </div>
                </div>

                <img className="post__main__image" src={`http://localhost:4000/${postInfo.cover}`} alt="" />

                <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            </section>
        </section>
    )
}