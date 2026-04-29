import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Readme() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/repos/DIVYATMAJ/DIVYATMAJ/readme")
      .then((res) => res.json())
      .then((res) => {
        const decoded = atob(res.content);
        setContent(decoded);
      });
  }, []);

  if (!content) return <p>Loading README...</p>;

  return (
    <div className="readme-content">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
        </ReactMarkdown>
    </div>
  );
}
