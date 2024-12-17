import { Link } from "react-router-dom";
export default function Card(img, title, tags, id, fetchDeletePost) {
  return (
    <>
      <div key={post.id} className="col">
        <div className="card">
          <div className="card-img-container">
            <img
              src={`http://localhost:3000${img}`}
              className="card-img-top img-fluid img-post"
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="post-tags">
              <div className="tag ">
                {tags.map((tag, index) => (
                  <span key={index} className="badge me-3 my-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              className="btn btn-danger btn-sm delete-button me-2"
              data-bs-toggle="modal"
              data-bs-target={`#modal-delete-post-${id}`}
            >
              Elimina
            </button>
            <Link
              to={`/posts/${id}`}
              className="btn btn-secondary btn-sm update-button"
            >
              Mostra
            </Link>
          </div>
        </div>
      </div>

      <div
        key={post.id}
        className="modal fade"
        id={`modal-delete-post-${id}`}
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
                onClick={() => fetchDeletePost(id)}
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
    </>
  );
}
