import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function News() {
  const [news, setNews] = useState([
    { id: 1, title: "news001", content: "锄禾日当午" },
    { id: 2, title: "news002", content: "汗滴禾下土" },
    { id: 3, title: "news003", content: "谁知盘中餐" },
    { id: 4, title: "news004", content: "粒粒皆辛苦" },
  ]);
  return (
    <div>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <Link
              to={`/home/news/detail?id=${item.id}&title=${item.title}&content=${item.content}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
