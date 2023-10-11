import "./App.css";
import AddPostForm from "./features/post/AddPostForm";

// my redux counter
// import Counter from "./features/counter/Counter";
import PostsList from "./features/post/PostsList";

function App() {
  return (
    <>
      <main>
        <section className="posts-container">
          <AddPostForm />
          <PostsList />
        </section>
      </main>
    </>
  );
}

export default App;
