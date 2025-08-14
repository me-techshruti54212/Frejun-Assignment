import React, { useState } from 'react'

const TableComponent = ({postsMap,onEdit,comment}) => {
	 const [editCell, setEditCell] = useState({ id: null, field: "" });
   const [tempValue, setTempValue] = useState("");

   const handleDoubleClick = (id, field, value) => {
     setEditCell({ id, field });
     setTempValue(value);
   };

   const saveEdit = () => {
     onEdit(editCell.id, editCell.field, tempValue);
     setEditCell({ id: null, field: "" });
   };

  return (
    <tr key={comment.id} className="hover:bg-gray-50">
      <td className="">{comment.email}</td>
      <td
        className=""
        onDoubleClick={() =>
          handleDoubleClick(comment.id, "name", comment.name)
        }
      >
        {editCell.id === comment.id && editCell.field === "name" ? (
          <input
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
            className="w-full border-none rounded px-2 py-1 outline-none"
          />
        ) : (
          comment.name
        )}
      </td>
      <td
        className=" "
        onDoubleClick={() =>
          handleDoubleClick(comment.id, "body", comment.body)
        }
      >
        {editCell.id === comment.id && editCell.field === "body" ? (
          <input
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
            className="w-full border-none rounded px-2 py-1 outline-none"
          />
        ) : (
          comment.body
        )}
      </td>
      <td className="">{postsMap[comment.postId]}</td>
    </tr>
  );
}

export default TableComponent