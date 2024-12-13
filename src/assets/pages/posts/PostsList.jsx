import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchPosts();
  });
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
        <div className="row row-cols-3 g-4">
          {posts.map((post) => (
            <div key={post.id} className="col">
              <div className="card">
                <div className="card-img-container">
                  <img
                    src={`http://localhost:3000${post.img}`}
                    className="card-img-top img-fluid img-post"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <div className="post-tags">
                    <div className="tag ">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="badge me-3 my-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="btn btn-danger btn-sm delete-button me-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal-delete-post-${post.id}`}
                  >
                    Elimina
                  </button>
                  <Link
                    to={`/posts/${post.id}`}
                    className="btn btn-secondary btn-sm update-button"
                  >
                    Mostra
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="modal fade"
          id={`modal-delete-post-${post.id}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Conferma di eliminazione
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                sei sicuro di voler eliminare questo post ?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => fetchDeletePost(post.id)}
                >
                  Elimina
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Annulla
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
