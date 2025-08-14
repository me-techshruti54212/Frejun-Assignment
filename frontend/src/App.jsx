import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import { FaInfoCircle } from "react-icons/fa";
export default function App() {
  const [comments, setComments] = useState([]);
  const [postsMap, setPostsMap] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const [commentsRes, postsRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
          res.json()
        ),
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
          res.json()
        ),
      ]);

      const postsMap = {};
      postsRes.forEach((post) => {
        postsMap[post.id] = post.title;
      });

      const savedEdits = JSON.parse(localStorage.getItem("edits") || "{}");
      const mergedComments = commentsRes.map((c) => ({
        ...c,
        ...savedEdits[c.id],
      }));

      setPostsMap(postsMap);
      setComments(mergedComments);
    };

    fetchData();
  }, []);

  const filteredComments = comments.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentComments = filteredComments.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredComments.length / rowsPerPage);

  const handleEdit = (id, field, value) => {
    const updated = comments.map((c) =>
      c.id === id ? { ...c, [field]: value } : c
    );
    setComments(updated);

    const savedEdits = JSON.parse(localStorage.getItem("edits") || "{}");
    savedEdits[id] = { ...savedEdits[id] , [field]: value };
    localStorage.setItem("edits", JSON.stringify(savedEdits));
  };

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table data={currentComments} postsMap={postsMap} onEdit={handleEdit} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <FaInfoCircle size={22} className="fixed bottom-4 right-2 cursor-pointer" title="Name/Body are editable on double-click"/>
    </div>
  );
}
