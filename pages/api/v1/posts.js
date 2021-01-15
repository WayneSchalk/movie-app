import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const postData = req.body;
    console.log(postData);
    return res.json({
      status: "saving to database",
      ...postData,
    });
  } else {
    const post = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = post.data;
    return res.json(posts.slice(0, 20));
  }
};
