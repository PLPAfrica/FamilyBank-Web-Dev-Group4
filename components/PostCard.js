import Image from "next/image";
import Logo from "../static/melbite.jpg";
import Image1 from "../static/image1.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
import { db } from "../firebase";

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);
  // console.log(post.data.description)

  useEffect(() => {
    const getAuthorData = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      const userData = querySnapshot.docs
        .find((doc) => {
          return doc.data().email == post.data.description;
        })
        ?.data();

      console.log("UserData: ", userData);

      // setAuthorData(
      //   await getDoc(doc(db, "Users", post.data.description)).data()
      // );

      // console.log(await getDoc(doc(db, "Users", post.data.description)).data());
    };

    getAuthorData();
  }, []);
  return (
    <main className="max-w-7xl pt-10 mx-auto">
      <Link href={`/post/${post.id}`}>
        <article className="flex items-center gap-[1rem] h-[13rem] max-w-[46rem] mb-4 cursor-pointer">
          <section>
            <div className="flex gap-3 items-center">
              <Image
                className="object-cover rounded-full"
                width={40}
                height={40}
                src={Logo}
              />
              <p className="font-semibold">{post.data.description}</p>
            </div>
            <div className="mt-2">
              <h1 className="font-bold text-2xl">{post.data.blogHeader}</h1>
              <p className="text-gray-600 my-2">
                Built by Python, jQuery, Bootstrap, Backbone JS, HTML5 and other
                technologies, Duolingo provides a digital way to learn foreign
                languages.
              </p>
            </div>
            <div className="flex gap-2 my-3 text-sm text-gray-700">
              <span>
                {new Date(post.data.timestamp).toLocaleString("en-UTC", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
              <span> 5 min read</span>
              <span className="bg-gray-200 p-1 rounded-full">
                {" "}
                Productivity
              </span>
            </div>
          </section>

          <section>
            <Image height={200} width={200} src={Image1} />
          </section>
        </article>
      </Link>
    </main>
  );
};

export default PostCard;
