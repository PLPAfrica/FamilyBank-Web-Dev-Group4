import { useContext, useEffect, useState } from "react";
import ArticleMain from "../../components/ArticleMain";
import Recommendations from "../../components/Recommendations";
import { MediumContext } from "../../context/MediumContext";
import { useRouter } from "next/router";

const Post = () => {
  const { posts, users } = useContext(MediumContext);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (posts.length === 0 || users.length === 0) {
      return;
    }

    console.log("Slug Data", router.query.slug);
    setPost(posts.find((post) => post.id === router.query.slug));

    setAuthor(users.find((user) => user.id == post.data?.author));
  }, [post]);
  return (
    <main className="flex justify-between items-center max-w-7xl mx-auto mt-24">
      <section className="">
        <ArticleMain post={post} author={author} />
      </section>

      <Recommendations />
      <section className=""></section>
    </main>
  );
};

export default Post;
