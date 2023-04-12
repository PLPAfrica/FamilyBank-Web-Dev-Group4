import React from "react";

const ArticleMain = ({ post, author }) => {
  // console.log(post, author, ":");
  return (
    <main>
      <section>
        <div className="flex gap-3 items-center">
          <img
            src="https://miro.medium.com/max/640/1*F5yY3MxNar1UukKys0RtBw.webp"
            className="rounded-full w-12 h-12"
          />
          <p className="font-semibold">{post?.data?.description}</p>
        </div>
        <div className="mt-2 max-w-2xl">
          <img src="https://miro.medium.com/max/640/1*F5yY3MxNar1UukKys0RtBw.webp" />
          <h1 className="font-bold text-2xl">{post?.data?.blogHeader}</h1>
          <p
            className="text-gray-600 my-2"
            dangerouslySetInnerHTML={{ __html: post?.data?.blogBody }}
          />
        </div>
        <div className="flex gap-2 my-3 text-sm text-gray-700">
          <span>Jan 27 </span>
          <span> 5 min read</span>
          <span className="bg-gray-200 p-1 rounded-full"> Productivity</span>
        </div>
      </section>
    </main>
  );
};

export default ArticleMain;
