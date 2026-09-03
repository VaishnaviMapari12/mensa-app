import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css";

export default function Courses() {
  const [courses_dynamic, setCoursesDynamic] = useState([]);

  // Fetch dynamic courses from Admin panel
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:1000/admin/courses_api");
      setCoursesDynamic(res.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
    const interval = setInterval(fetchCourses, 5000); // auto-refresh every 5 sec
    return () => clearInterval(interval);
  }, []);

  // Split first 4 cards and rest
  const firstFour = courses_dynamic.slice(0, 4);
  const restCourses = courses_dynamic.slice(4);

  return (
    <div className="courses-container">
      <h1 className="courses-title text-center mb-3">Courses</h1>
      <p className="courses-subtitle text-center mb-4">
        Pendrive Lectures for all Courses are also available. For more details contact office.
      </p>

      <div className="courses-grid">
        {/* First 4 dynamic cards */}
        {firstFour.map((c) => (
          <div key={`first-${c.course_id}`} className="course-card">
            <img
              src={`http://localhost:1000/uploads/${c.course_image}?t=${new Date().getTime()}`}
              alt={c.course_name}
              className="course-img"
              onError={(e) => { e.target.src = "/default-course.png"; }}
            />
            <div className="course-body">
              <h3 className="course-title">{c.course_name}</h3>
              <p className="course-teacher">With {c.course_banner}</p>
              <p className="course-meta">📚 {c.course_language}</p>
              <p className="course-meta">💰 ₹{c.course_price}</p>
            </div>
          </div>
        ))}

        {/* Rest of dynamic cards (5th, 6th...) */}
        {restCourses.map((c) => (
          <div key={`rest-${c.course_id}`} className="course-card">
            <img
              src={`http://localhost:1000/uploads/${c.course_image}?t=${new Date().getTime()}`}
              alt={c.course_name}
              className="course-img"
              onError={(e) => { e.target.src = "/default-course.png"; }}
            />
            <div className="course-body">
              <h3 className="course-title">{c.course_name}</h3>
              <p className="course-teacher">With {c.course_banner}</p>
              <p className="course-meta">📚 {c.course_language}</p>
              <p className="course-meta">💰 ₹{c.course_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
