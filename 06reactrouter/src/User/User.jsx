import React from "react";
import { useParams } from "react-router";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-700 text-white flex items-center justify-center">
      <h1 >User: {userId}</h1>
    </div>
  );
}

export default User;