import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import { Header } from "../../components/Header"
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import './styles.css';

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image'],
        ['clean'],
    ],
};

export const CreateNewPost = () => {

    const navigate = useNavigate();

    const categories = ['English', 'Spanish', 'French', 'Portuguese'];

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [selectedCategorie, setSelectedCategorie] = useState('');

    async function handleCreateNewPost(ev: FormEvent) {

        ev.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        data.set('category', selectedCategorie);

        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {

            navigate('/');
        }
    }

    return (
        <section>

            <Header />

            <h1>Create new post</h1>

            <form className="create__new__post__form">

                <input
                    type="title"
                    placeholder={'Title'}
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />

                <input
                    type="summary"
                    placeholder={'Summary'}
                    value={summary}
                    onChange={ev => setSummary(ev.target.value)}
                />

                <h3>Post image</h3>

                <input
                    type="file"
                    onChange={ev => setFiles(ev.target.files)}
                />

                <h3>Post category</h3>

                <div className="categories__container">
                    {categories.map(item => (
                        <div
                            onClick={() => setSelectedCategorie(item)}
                            className={`categorie ${selectedCategorie === item && 'selected__categorie'}`}
                        >
                            <p>{item}</p>
                        </div>
                    ))}
                </div>

                <ReactQuill
                    value={content}
                    theme={'snow'}
                    onChange={setContent}
                    modules={modules}
                />

                <button className="create__post__button" onClick={ev => handleCreateNewPost(ev)}>Create post</button>
            </form>
        </section>
    )
}