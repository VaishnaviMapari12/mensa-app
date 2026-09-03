import React from "react";
import Courses from "./Courses";
import Timetabledetails from "./Timetabledetails";

export default function AboutUs() {
  return (
    <>
      <div className="container-fluid">

        {/* Top Heading */}
        <div className="row">
          <div className="col-12 about-bg text-start py-5">
            <h1 className="text-white display-4">Time Table</h1>
          </div>
        </div>

      </div>

      {/* Courses Section */}
      <Courses />

      {/* Multiple Timetable Sections */}
      <Timetabledetails />
      <Timetabledetails />
      <Timetabledetails />
      <Timetabledetails />

    </>
  );
}
