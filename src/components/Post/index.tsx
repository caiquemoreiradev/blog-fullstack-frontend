import { Link } from 'react-router-dom';

import { PostProps } from '../../@types/Post';

import './styles.css';
import moment from 'moment';

interface PostComponentProps {
    post: PostProps
}

export const Post = ({ post }: PostComponentProps) => {

    return (
        <Link to={`/post/${post._id}`}>
            <div className='post__container'>
                <img src={'http://localhost:4000/' + post.cover} alt={post.title} />

                <div className='post__info'>

                    <div className='post__category'>
                        <span>{post.category}</span>
                    </div>
                    <h3>{post.title}</h3>

                    <div className='post__details'>
                        <strong>{post.author.username}</strong>
                        <span>{moment(post.createdAt).format('llll')}</span>                    </div>

                    <p>{post.summary}</p>
                </div>
            </div>
        </Link>
    )
}