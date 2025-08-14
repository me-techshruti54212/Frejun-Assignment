import React from "react";
import TableComponent from "./TableComponent";

export default function Table({ data, postsMap, onEdit }) {
  return (
    <div className="min-h-[80vh] ">
      <div className="overflow-x-auto mt-4 rounded-2xl sm:w-[90%]  mx-auto bg-[#fff] border border-black h-[80vh]">
        <table className="w-full ">
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Body</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
            {data.map((comment) => <TableComponent postsMap={postsMap} onEdit={onEdit} comment={comment}/>)}
            </tbody>
        </table>
      </div>
    </div>
  );
}
