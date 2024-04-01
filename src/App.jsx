import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Course from './pages/Course.jsx';

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null); // State to store selected course

  
  const dataCourse = [
    {
      id: "001A", title: "Belajar Membaca", imgLink: "https://i.pinimg.com/736x/b7/05/98/b7059839f7530b9266be852a1d1d30db.jpg", desc: "Belajar dengan media quiz serta video", statusCourse: true, linkModul: "https://drive.google.com/drive/folders/1QW0FbLDOwkCE7mxQgE1mmlxxjd44P2au",
    },
    {
      id: "002B", title: "Belajar Menghitung", imgLink: "", desc: "Belajar dengan media quiz serta video", statusCourse: false, linkModul: "",
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home dataCourse={dataCourse}  />}
        />
        <Route
          path="/course"
          element={<Course />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
