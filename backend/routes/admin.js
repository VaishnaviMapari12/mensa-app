const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const db = require("../conn"); // conn.js import

// Middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(fileUpload());

// Dashboard
// router.get("/dashboard", (req, res) => {
//   const username = "Admin";
//   const lastLogin = new Date();
//   res.render("admin/dashboard", { username, lastLogin });
// });

// router.get("/dashboard", (req, res) => {
//   const username = "Admin";
//   const lastLogin = new Date();
//   app.get("/", (req, res) => {
//     res.redirect("/admin/dashboard");

// });

// app.get("/", (req, res) => {
//     res.redirect("/admin/dashboard");
// });


router.get("/dashboard", (req, res) => {
    res.render("admin/navbar");
});



// Navbar Page
router.get("/navbar", (req, res) => {
  res.render("admin/navbar");
});
// Add About Page (Form Only)
router.get("/about", (req, res) => {
  res.render("admin/about");  // No data — Only form
});

// Save About
router.post("/save_about", (req, res) => {
  const { about_description } = req.body;

  let about_image = null;
  if (req.files && req.files.about_image) {
    about_image = req.files.about_image.name;
    req.files.about_image.mv("./public/uploads/" + about_image, (err) => {
      if (err) console.log(err);
    });
  }

  const sql = `INSERT INTO about (about_description, about_image) VALUES (?, ?)`;
  const values = [about_description, about_image];

  db.query(sql, values, (err) => {
    if (err) {
      console.log(err);
      return res.send("Database error");
    }
    res.redirect("/admin/about_list");
  });
});

// About List Page (Only List)
router.get("/about_list", (req, res) => {
  db.query("SELECT * FROM about ORDER BY about_id DESC", (err, aboutData) => {
    if (err) return res.send("Database error");
    res.render("admin/about_list", { aboutData });
  });
});


router.get("/edit_about/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM about WHERE about_id=?", [id], (err, result) => {
    if (err) return res.send("DB Error");
    res.render("admin/about_edit", { about: result[0] });
  });
});

// Delete About
router.get("/delete_about/:id", (req, res) => {
  const aboutId = req.params.id;

  // First get the image name of THIS record only
  db.query("SELECT about_image FROM about WHERE about_id = ?", [aboutId], (err, result) => {
    if (err) return res.send("Database error");

    if (result.length > 0 && result[0].about_image) {
      const fs = require('fs');
      const path = "./public/uploads/" + result[0].about_image;
      if (fs.existsSync(path)) fs.unlinkSync(path); // delete only THIS image
    }

    // Delete the record from DB
    db.query("DELETE FROM about WHERE about_id = ?", [aboutId], (err2, result2) => {
      if (err2) return res.send("Database error");

      // Redirect back to about list
      res.redirect("/admin/about_list");
    });
  });
});



// =================== SLIDER ===================

// ---------------- Add Slider Form ----------------
router.get("/slider", (req, res) => {
  res.render("admin/slider");
});


// -------------------------------------------------
//                SAVE SLIDER
// -------------------------------------------------
router.post("/save_slider", (req, res) => {
  try {
    if (!req.files || !req.files.left_image)
      return res.send("Left image required!");

    const slider_name = req.body.slider_name;

    // LEFT IMAGE
    const left_image = Date.now() + "_" + req.files.left_image.name;
    req.files.left_image.mv("./public/uploads/" + left_image);

    // RIGHT IMAGES (1 to 4)
    const right_images = [];
    for (let i = 1; i <= 4; i++) {
      if (req.files[`right_image${i}`]) {
        const fname = Date.now() + "_" + req.files[`right_image${i}`].name;
        req.files[`right_image${i}`].mv("./public/uploads/" + fname);
        right_images.push(fname);
      } else {
        right_images.push(null);
      }
    }

    const sql = `
      INSERT INTO slider 
      (slider_name, left_image, right_image1, right_image2, right_image3, right_image4)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [slider_name, left_image, ...right_images], (err) => {
      if (err) return res.send("DB Error: " + err);
      res.redirect("/admin/slider_list");
    });

  } catch (error) {
    res.send(error.message);
  }
});


// -------------------------------------------------
//                LIST SLIDER
// -------------------------------------------------
router.get("/slider_list", (req, res) => {
  db.query("SELECT * FROM slider ORDER BY slider_id DESC", (err, data) => {
    if (err) return res.send("DB Error");
    res.render("admin/slider_list", { sliderData: data });
  });
});


// -------------------------------------------------
//                DELETE SLIDER
// -------------------------------------------------
router.get("/delete_slider/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM slider WHERE slider_id=?", [id], (err, data) => {
    if (err) return res.send("DB Error");

    if (data.length > 0) {
      const row = data[0];

      let images = [
        row.left_image,
        row.right_image1,
        row.right_image2,
        row.right_image3,
        row.right_image4
      ];
// 
      images.forEach(img => {
        if (img) {
          let imgPath = "./public/uploads/" + img;
          if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
        }
      });
    }

    db.query("DELETE FROM slider WHERE slider_id=?", [id], (err2) => {
      if (err2) return res.send("DB Error");
      res.redirect("/admin/slider_list");
    });
  });
});


// -------------------------------------------------
//                EDIT SLIDER FORM
// -------------------------------------------------
router.get("/edit_slider/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM slider WHERE slider_id=?", [id], (err, data) => {
    if (err) return res.send("DB Error");
    res.render("admin/slider_edit", { slider: data[0] });
  });
});


// -------------------------------------------------
//                UPDATE SLIDER
// -------------------------------------------------
router.post("/update_slider/:id", (req, res) => {
  const id = req.params.id;
  const { slider_name } = req.body;

  db.query("SELECT * FROM slider WHERE slider_id=?", [id], (err, result) => {
    if (err) return res.send("DB Error");

    let row = result[0];

    let left_image = row.left_image;
    let right_images = [
      row.right_image1,
      row.right_image2,
      row.right_image3,
      row.right_image4
    ];

    // UPDATE LEFT IMAGE
    if (req.files && req.files.left_image) {
      if (left_image && fs.existsSync("./public/uploads/" + left_image))
        fs.unlinkSync("./public/uploads/" + left_image);

      left_image = Date.now() + "_" + req.files.left_image.name;
      req.files.left_image.mv("./public/uploads/" + left_image);
    }

    // UPDATE RIGHT IMAGES
    for (let i = 1; i <= 4; i++) {
      if (req.files && req.files[`right_image${i}`]) {
        if (right_images[i - 1] && fs.existsSync("./public/uploads/" + right_images[i - 1]))
          fs.unlinkSync("./public/uploads/" + right_images[i - 1]);

        right_images[i - 1] =
          Date.now() + "_" + req.files[`right_image${i}`].name;

        req.files[`right_image${i}`].mv("./public/uploads/" + right_images[i - 1]);
      }
    }

    const sql = `
      UPDATE slider 
      SET slider_name=?, left_image=?, right_image1=?, right_image2=?, right_image3=?, right_image4=?
      WHERE slider_id=?
    `;

    db.query(
      sql,
      [slider_name, left_image, ...right_images, id],
      (err2) => {
        if (err2) return res.send("DB Error");
        res.redirect("/admin/slider_list");
      }
    );
  });
});




// -------------------- Add About Us Form --------------------
router.get("/aboutus", (req, res) => {
  res.render("admin/aboutus"); // Render form page
});

// -------------------- Save About Us --------------------
router.post("/save_aboutus", (req, res) => {
  const { title, icon, description } = req.body;
  let imageFile = null;

  if (req.files && req.files.image) {
    const image = req.files.image;
    imageFile = Date.now() + "_" + image.name; // Unique filename
    image.mv("./public/uploads/" + imageFile, (err) => {
      if (err) console.log(err);
    });
  }

  const sql = `INSERT INTO aboutus (title, icon, description, image) VALUES (?, ?, ?, ?)`;
  db.query(sql, [title, icon, description, imageFile], (err, result) => {
    if (err) {
      console.log("Database Error:", err);
      return res.send("Database error");
    }
    res.redirect("/admin/aboutus_list");
  });
});

// -------------------- List About Us --------------------
router.get("/aboutus_list", (req, res) => {
  db.query("SELECT * FROM aboutus ORDER BY about_id DESC", (err, aboutData) => {
    if (err) return res.send("Database error");
    res.render("admin/aboutus_list", { aboutData });
  });
});

// -------------------- Edit About Us Form --------------------
router.get("/edit_aboutus/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM aboutus WHERE about_id = ?", [id], (err, result) => {
    if (err) return res.send("Database error");
    if (result.length === 0) return res.send("No record found");
    res.render("admin/aboutus_edit", { about: result[0] });
  });
});

// -------------------- Update About Us --------------------
router.post("/update_aboutus/:id", (req, res) => {
  const id = req.params.id;
  const { title, icon, description } = req.body;
  let imageFile = null;

  if (req.files && req.files.image) {
    const image = req.files.image;
    imageFile = Date.now() + "_" + image.name;
    image.mv("./public/uploads/" + imageFile, (err) => {
      if (err) console.log(err);
    });
  }

  let sql, values;
  if (imageFile) {
    sql = `UPDATE aboutus SET title=?, icon=?, description=?, image=? WHERE about_id=?`;
    values = [title, icon, description, imageFile, id];
  } else {
    sql = `UPDATE aboutus SET title=?, icon=?, description=? WHERE about_id=?`;
    values = [title, icon, description, id];
  }

  db.query(sql, values, (err, result) => {
    if (err) return res.send("Database error");
    res.redirect("/admin/aboutus_list");
  });
});

// -------------------- Delete About Us --------------------
router.get("/delete_aboutus/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM aboutus WHERE about_id=?", [id], (err, result) => {
    if (err) return res.send("Database error");
    res.redirect("/admin/aboutus_list");
  });
});
// Courses Page==============================================================================


// ==================== COURSES ====================
// Show Add Course Form
router.get("/courses", (req, res) => {
  res.render("admin/course"); // admin/course.ejs
});

// Save Course
router.post("/save_course", (req, res) => {
  const { course_name, course_duration, course_language, course_price, course_banner } = req.body;

  let course_image = null;
  if (req.files && req.files.course_image) {
    course_image = Date.now() + "_" + req.files.course_image.name;
    req.files.course_image.mv("./public/uploads/" + course_image, (err) => {
      if (err) return res.send(err);
    });
  }

  const sql = `INSERT INTO courses 
    (course_name, course_image, course_duration, course_banner, course_language, course_price)
    VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [course_name, course_image, course_duration, course_banner, course_language, course_price];

  db.query(sql, values, (err) => {
    if (err) return res.send("Database error: " + err);
    res.redirect("/admin/course_list");
  });
});

// Courses List
router.get("/course_list", (req, res) => {
  db.query("SELECT * FROM courses ORDER BY course_id DESC", (err, courses) => {
    if (err) return res.send("Database error: " + err);
    res.render("admin/course_list", { courses });
  });
});

// Edit Course
router.get("/edit_course/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM courses WHERE course_id=?", [id], (err, result) => {
    if (err) return res.send("Database error: " + err);
    if (result.length === 0) return res.send("No record found");
    res.render("admin/course_edit", { course: result[0] });
  });
});

// Update Course
router.post("/update_course/:id", (req, res) => {
  const id = req.params.id;
  const { course_name, course_duration, course_language, course_price, course_banner } = req.body;
  let course_image = null;

  if (req.files && req.files.course_image) {
    course_image = Date.now() + "_" + req.files.course_image.name;
    req.files.course_image.mv("./public/uploads/" + course_image);
  }

  let sql, values;
  if (course_image) {
    sql = `UPDATE courses SET course_name=?, course_duration=?, course_language=?, course_price=?, course_banner=?, course_image=? WHERE course_id=?`;
    values = [course_name, course_duration, course_language, course_price, course_banner, course_image, id];
  } else {
    sql = `UPDATE courses SET course_name=?, course_duration=?, course_language=?, course_price=?, course_banner=? WHERE course_id=?`;
    values = [course_name, course_duration, course_language, course_price, course_banner, id];
  }

  db.query(sql, values, (err) => {
    if (err) return res.send("Database error: " + err);
    res.redirect("/admin/course_list");
  });
});

// Delete Course
router.get("/delete_course/:id", (req, res) => {
  const id = req.params.id;

  // Delete course image if exists
  db.query("SELECT course_image FROM courses WHERE course_id=?", [id], (err, result) => {
    if (err) return res.send("Database error");
    if (result.length > 0 && result[0].course_image) {
      const fs = require('fs');
      const path = "./public/uploads/" + result[0].course_image;
      if (fs.existsSync(path)) fs.unlinkSync(path);
    }

    db.query("DELETE FROM courses WHERE course_id=?", [id], (err2) => {
      if (err2) return res.send("Database error");
      res.redirect("/admin/course_list");
    });
  });
});




// Contacts Page==============================================================================================================
router.get("/contact", (req, res) => {
  db.query("SELECT * FROM contacts ORDER BY contact_id DESC", (err, contacts) => {
    if (err) return res.send("Database error");

    // Render page with contacts, form hidden by default
    res.render("admin/contact", { contacts });
  });
});

// Save Contact
router.post("/save_contacts", (req, res) => {
  const { name, number, email, address } = req.body;

  let contact_image = null;
  if (req.files && req.files.contact_image) {
    contact_image = req.files.contact_image.name;
    req.files.contact_image.mv("./public/uploads/" + contact_image, (err) => {
      if (err) console.log(err);
    });
  }

  const sql = `INSERT INTO contacts (name, number, email, address, contact_image)
               VALUES (?, ?, ?, ?, ?)`;
  const values = [name, number, email, address, contact_image];

  db.query(sql, values, (err, result) => {
    if (err) return res.send("Database error");

    // Redirect back to contact list → form stays hidden
    res.redirect("/admin/contact");
  });
});

// student conerr----------------------------------------------------------------------------------
// -------------------- Student Corner Form Page --------------------
router.get("/studentcorner", (req, res) => {
    res.render("admin/studentcorner");
});
// -------------------- Save Student Corner --------------------
router.post("/save_studentcorner", (req, res) => {
  const { title, name, address, mobile } = req.body;

  const sql = `INSERT INTO studentcorner (title, name, address, mobile) VALUES (?, ?, ?, ?)`;
  const values = [title, name, address, mobile];

  db.query(sql, values, (err) => {
    if (err) return res.send("Database Error");
    res.redirect("/admin/studentcorner_list");
  });
});
// -------------------- List Student Corner --------------------
router.get("/studentcorner_list", (req, res) => {
  db.query("SELECT * FROM studentcorner ORDER BY student_id DESC", (err, data) => {
    if (err) return res.send("Database Error");
    res.render("admin/studentcorner_list", { data });
  });
});
// -------------------- Edit Page --------------------
router.get("/edit_studentcorner/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM studentcorner WHERE student_id = ?", [id], (err, result) => {
    if (err) return res.send("DB Error");
    res.render("admin/studentcorner_edit", { student: result[0] });
  });
});
// -------------------- Update Student Corner --------------------
router.post("/update_studentcorner/:id", (req, res) => {
  const id = req.params.id;
  const { title, name, address, mobile } = req.body;

  const sql = `UPDATE studentcorner SET title=?, name=?, address=?, mobile=? WHERE student_id=?`;
  const values = [title, name, address, mobile, id];

  db.query(sql, values, (err) => {
    if (err) return res.send("DB Error");
    res.redirect("/admin/studentcorner_list");
  });
});
// -------------------- Delete --------------------
router.get("/delete_studentcorner/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM studentcorner WHERE student_id=?", [id], (err) => {
    if (err) return res.send("DB Error");
    res.redirect("/admin/studentcorner_list");
  });
});


// time table 
// GET: Admin Time Table Page
router.get("/timetable", (req, res) => {
  res.render("admin/timetable", {
    title: "Admin - Time Table"
  });
});

// POST: Add Time Table Entry
router.post("/timetable", (req, res) => {
  const { courseName, day, time } = req.body;

  // TODO: Save to database
  console.log("New Timetable Entry:", courseName, day, time);

  // Redirect back to form after submission
  res.redirect("admin/timetable");
});



// GET testimonials 

// GET testimonials page
router.get("/testimonials", (req, res) => {
    const sql = "SELECT * FROM testimonials ORDER BY id DESC";
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.render("admin/testimonials", { title: "Admin - Testimonials", testimonials: results });
    });
});

// POST testimonial
router.post("/testimonials", (req, res) => {
    const { name, course, message } = req.body;
    const sql = "INSERT INTO testimonials (name, course, message) VALUES (?, ?, ?)";
    db.query(sql, [name, course, message], (err, result) => {
        if(err) throw err;
        res.redirect("/admin/testimonials");
    });
});
// ----------------------------
// ADMIN: Add Result Form
// URL: /admin/results/add
// ----------------------------
// router.get("/results/add", (req, res) => {
//   res.render("admin/result"); // result.ejs form
// });

// ----------------------------
// ADMIN: Save Result
// Show Add Result form
router.get("/results", (req, res) => {
  res.render("admin/result"); // result.ejs
});

// Save Result
router.post("/results/add", (req, res) => {
  const { title, name } = req.body;

  if (!req.files || !req.files.image) return res.send("Image is required!");

  const imageFile = req.files.image;
  const imageName = Date.now() + "_" + imageFile.name;

  imageFile.mv(path.join(__dirname, "../public/uploads/", imageName), (err) => {
    if (err) return res.send(err);

    const q = "INSERT INTO results (title, name, image) VALUES (?, ?, ?)";
    db.query(q, [title, name, imageName], (err2) => {
      if (err2) return res.send("Database Error: " + err2);
      res.redirect("/admin/result_list");
    });
  });
});

// Show Results List
router.get("/result_list", (req, res) => {
  db.query("SELECT * FROM results ORDER BY result_id DESC", (err, data) => {
    if (err) return res.send("Database Error: " + err);
    res.render("admin/result_list", { results: data });
  });
});

// Delete Result
router.get("/result_delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT image FROM results WHERE result_id=?", [id], (err, data) => {
    if (err) return res.send("Database Error: " + err);

    if (data.length > 0 && data[0].image) {
      const imgPath = path.join(__dirname, "../public/uploads/", data[0].image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    db.query("DELETE FROM results WHERE result_id=?", [id], (err2) => {
      if (err2) return res.send("Database Error: " + err2);
      res.redirect("/admin/result_list");
    });
  });
});

// Edit Result Form
router.get("/result/edit/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM results WHERE result_id=?", [id], (err, data) => {
    if (err) return res.send("Database Error: " + err);
    if (data.length === 0) return res.send("No record found");
    res.render("admin/results_edit", { result: data[0] });
  });
});

// Update Result
router.post("/result/update/:id", (req, res) => {
  const id = req.params.id;
  const { title, name } = req.body;

  if (req.files && req.files.image) {
    const imageFile = req.files.image;
    const imageName = Date.now() + "_" + imageFile.name;

    imageFile.mv(path.join(__dirname, "../public/uploads/", imageName), (err) => {
      if (err) return res.send(err);

      db.query(
        "UPDATE results SET title=?, name=?, image=? WHERE result_id=?",
        [title, name, imageName, id],
        (err2) => {
          if (err2) return res.send("Database Error: " + err2);
          res.redirect("/admin/result_list");
        }
      );
    });
  } else {
    db.query(
      "UPDATE results SET title=?, name=? WHERE result_id=?",
      [title, name, id],
      (err2) => {
        if (err2) return res.send("Database Error: " + err2);
        res.redirect("/admin/result_list");
      }
    );
  }
});


// LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("admin/login");
});

// LOGIN POST
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    res.redirect("/admin/dashboard");
  } else {
    res.send("Invalid Username or Password");
  }
});

// LOGOUT
router.get("/logout", (req, res) => {
  res.render("admin/logout");
});

// SETTINGS
router.get("/settings", (req, res) => {
  res.render("admin/settings");
});

// ----------------------------
// ADMIN: Add Result Form
// GET: /admin/result
// ----------------------------
-
// ADMIN: Add Result Form
// GET: /admin/result
// -------------------------

// ========================= RESULTS =========================

// ----------------------------
// Add Result Form
// GET: /admin/results
// 




// api connction------------------------------------------------------------------------------------------------------------
// SLIDER 
// ---------------- SLIDER API ----------------
router.get("/slider_api", (req, res) => {
  const sql = "SELECT * FROM slider ORDER BY slider_id DESC";
  db.query(sql, (err, data) => {
    if (err) {
      console.log("Database Error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(data);
  });
});

router.get("/aboutus_api", (req, res) => {
  const sql = "SELECT * FROM aboutus ORDER BY about_id DESC";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(data);
  });
});

router.get("/about_api", (req, res) => {
  const sql = "SELECT * FROM aboutus ORDER BY about_id DESC";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(data);
  });
});




router.get("/courses_api", (req, res) => {
  const sql = "SELECT * FROM courses";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results); // JSON response योग्य
  });
});



router.get("/result_api", (req, res) => {
  const sql = "SELECT * FROM results"; // ✅ Use the correct table name
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results); // JSON response
  });
});


router.get("/studentcorner_api", (req, res) => {
  const sql = "SELECT * FROM studentcorner"; // ✅ Table madhun sagle records select karaycha
  db.query(sql, (err, results) => {           // DB query execute karaychi
    if (err) return res.status(500).json({ error: err.message }); // Error handle karaycha
    res.json(results); // JSON format madhe frontend la data pathavaycha
  });
});

module.exports = router;
