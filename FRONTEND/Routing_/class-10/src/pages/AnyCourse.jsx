import React from "react";
import { useParams } from "react-router-dom";

function AnyCourse() {
  const params = useParams();
  return (
    <div>
      <h1 className="capitalize font-bold text-4xl text-center underline">
        {params.courseId} Course page (..dynamic..)
      </h1>
    </div>
  );
}

export default AnyCourse;
