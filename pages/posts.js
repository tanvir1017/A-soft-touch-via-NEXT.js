import Link from "next/link";
import Meta from "../components/Meta";
export default function Posts({ postsData }) {
  return (
    <>
      <Meta
        title="Blogs"
        keywords="json place holder, dummy data"
        description="some of the dummy text are here"
      />
      <div className="row">
        {postsData.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card p-2">
              <h4>{post.title.substring(0, 30)}</h4>
              <p>{post.body.substring(0, 100)}...</p>
              <button className="btn btn-success">
                <Link href="/post/[id]" as={`/post/${post.id}`}>
                  <a className="text-decoration-none text-light"> Read More</a>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const postsData = await res.json();

  return {
    props: {
      postsData,
    },
  };
}; */

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const postsData = await res.json();

  return {
    props: {
      postsData,
    },
  };
};
