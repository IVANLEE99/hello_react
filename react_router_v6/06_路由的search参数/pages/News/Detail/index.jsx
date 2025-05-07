import React from "react";
import { useParams, useSearchParams, useMatch } from "react-router-dom";

export default function Detail() {
  const [searchParams, setSearchParams] = useSearchParams();
  //   const match = useMatch("/home/news/detail");
  //   console.log(searchParams);
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const content = searchParams.get("content");
  return (
    <div>
      <h2>Detail</h2>
      <p>新闻编号：{id}</p>
      <p>新闻标题：{title}</p>
      <p>新闻内容：{content}</p>
      <button
        onClick={() =>
          setSearchParams({
            id: 100,
            title: "锄禾日当午",
            content: "汗滴禾下土",
          })
        }
      >
        修改
      </button>
    </div>
  );
}
