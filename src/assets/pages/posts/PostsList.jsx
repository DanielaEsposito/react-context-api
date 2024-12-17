import { usePostsContext } from "../../context/postsContext";
import Card from "../../components/Card";
export default function PostsList() {
  const { posts, fetchPosts } = usePostsContext();
  const fetchDeletePost = (id) => {
    const url = `http://localhost:3000/posts/${id}`;
    fetch(url, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        fetchPosts();
      });
  };
  return (
    <>
      <div className="container my-5">
        <h1 className="my-5 text-center">Post List</h1>
        <div className="row row-cols-3 d-flex  g-4">
          {posts.map((post) => (
            <Card
              key={post.id}
              img={post.img}
              title={post.title}
              tags={post.tags}
              id={post.id}
              fetchDeletePost={fetchDeletePost}
            />
          ))}
        </div>
      </div>
    </>
  );
}
