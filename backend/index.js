// const express = require("express");

// const path = require("path");

// const app = express();



// // Set view engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Static folder
// app.use(express.static(path.join(__dirname, "public")));

// // Body parser
// app.use(express.urlencoded({ extended: true }));

// // Admin Routes
// const adminRoutes = require("./routes/admin");
// app.use("/admin", adminRoutes);

// // Home route
// app.get("/", (req, res) => {
//   res.render("admin/index");
// });
// app.listen(1000, () => {
//   console.log("Server running on port 1000");
// });













// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Static folders
// app.use(express.static(path.join(__dirname, "public")));
// app.use('/uploads', express.static(path.join(__dirname, "public/uploads")));

// // ✅ Views & Template Engine
// app.set("views", path.join(__dirname, "views")); // views folder
// app.set("view engine", "ejs");

// // Routes
// const adminRoutes = require("./routes/admin");
// app.use("/admin", adminRoutes);

// app.listen(1000, () => console.log("Server running on port 1000"));



// const express = require("express");
// const path = require("path");

// const app = express();

// // View Engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Static
// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// const adminRoutes = require("./routes/admin");
// app.use("/admin", adminRoutes);

// //  MAIN ROOT (IMPORTANT)
// app.get("/", (req, res) => {
//     res.redirect("/admin/dashboard");
// });

// // Server
// app.listen(1000, () => {
//     console.log("Server started");
// });

const express = require("express");
const path = require("path");
const cors = require("cors"); // 🔥 ADD

const app = express();

app.use(cors()); // 🔥 VERY IMPORTANT

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

const adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
    res.redirect("/admin/dashboard");
});

app.listen(1000, () => {
    console.log("Server started on port 1000");
});