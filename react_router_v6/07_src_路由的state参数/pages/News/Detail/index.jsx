import React from "react";
import {
  useParams,
  useSearchParams,
  useMatch,
  useLocation,
} from "react-router-dom";

export default function Detail() {
  const {
    state: { id, title, content },
  } = useLocation();
//   console.log(state);
  return (
    <div>
      <h2>Detail</h2>
      <p>新闻编号：{id}</p>
      <p>新闻标题：{title}</p>
      <p>新闻内容：{content}</p>
    </div>
  );
}
