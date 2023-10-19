import "./App.css";
import AddPostForm from "./features/post/AddPostForm";

// my redux counter
// import Counter from "./features/counter/Counter";
import PostsList from "./features/post/PostsList";

import SinglePostPage from "./features/post/SinglePostPage";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
