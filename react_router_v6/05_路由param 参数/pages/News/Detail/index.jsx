import React from "react";
import { useParams, useSearchParams,useMatch } from "react-router-dom";

export default function Detail() {
  const { id, title, content } = useParams();
  const search = useSearchParams();
  const match = useMatch("/home/news/detail/:id/:title/:content");
  console.log(match,search);
  return (
    <div>
      <h2>Detail</h2>
      <p>新闻编号：{id}</p>
      <p>新闻标题：{title}</p>
      <p>新闻内容：{content}</p>
    </div>
  );
}
