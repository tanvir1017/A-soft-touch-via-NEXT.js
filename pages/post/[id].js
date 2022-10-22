import Meta from "../../components/Meta";

const BlogDetailsPage = ({ postItem }) => {
  return (
    <>
      <Meta
        title={postItem.title}
        keywords={postItem.title}
        description={postItem.body}
      />
      <main className="mt-4">
        <h2>{postItem.title}</h2>
        <p>{postItem.body}</p>
      </main>
    </>
  );
};

/* export const getServerSideProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + context.params.id
  );
  const postItem = await res.json();
  return {
    props: {
      postItem,
    },
  };
};

export default BlogDetailsPage; */

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + context.params.id
  );
  const postItem = await res.json();
  return {
    props: {
      postItem,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();
  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogDetailsPage;
