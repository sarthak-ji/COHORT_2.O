import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetails() {
    const params = useParams();
  return (
    <div>
      <h1 className='capitalize font-bold text-center text-4xl underline'>
        {params.courseId} Course detail page
      </h1>
    </div>
  )
}

export default CourseDetails
