import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { PostDetails } from "./pages/PostDetails";
import { CreateNewPost } from "./pages/CreateNewPost";

export const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-new-post" element={<CreateNewPost />} />
            <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
    )
}