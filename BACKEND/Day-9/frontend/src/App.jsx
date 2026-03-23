import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  console.log("Hello Integration");

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;

    console.log(title.value, description.value);

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }

  function handleDelete(noteId) {
    axios
      .delete(`http://localhost:3000/api/notes/${noteId}`)
      .then((res) => {
        console.log(res.data);

        fetchNotes();
      });
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">

      <form onSubmit={handleSubmit} className="flex gap-4 mb-8 p-4 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
        <input 
          type="text" 
          placeholder="Write title" 
          name="title"
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Create note</button>
      </form>


      <div className="notes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto px-4">
        {notes?.map((note) => {
          return (
            <div key={note._id} className="bg-blue-100 border-2 border-blue-300 rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-blue-200 transition-all duration-300 cursor-pointer group">
              <h1 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800">{note.title}</h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">{note.description}</p>
              <button 
                onClick={() => {handleDelete(note._id)}}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition-colors ml-auto"
              >Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;