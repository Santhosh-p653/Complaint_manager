Civic Complaint Portal — Full-Stack Web App (Flask + SQLite)

A community-driven civic engagement platform where citizens can submit local complaints with image proof, and administrators can post resolution updates with remarks and completion evidence. Built using Flask, SQLite, and Bootstrap for simplicity, transparency, and real-time accountability.

---

📂 Folder Structure

`
/civic_app/
├── app.py              → Flask app factory and entry point
├── models.py           → SQLAlchemy models: Complaint & Resolution
├── routes.py           → Route handlers for civilian and admin dashboards
├── templates/
│   ├── index.html      → Role-based login page (Admin/Civilian)
│   ├── civilian.html   → Complaint submission form
│   └── admin.html      → Resolution form for admins
├── static/
│   ├── style.css       → Custom CSS (dark UI + layout tweaks)
│   ├── script.js       → Frontend logic (form routing, field toggling)
│   └── uploads/        → Image uploads for complaints and resolutions
├── db.sqlite3          → SQLite database (created automatically)
├── requirements.txt    → Python package dependencies
├── README.md           → Project documentation
`

---

📚 File Descriptions

app.py
Main Flask application initializer. Sets up app configuration, creates tables, registers blueprints, and runs the server.

models.py
Defines database schema using SQLAlchemy:
- Complaint: stores description + uploaded image
- Resolution: linked to complaint ID with notes + proof image

routes.py
Handles:
- /civilian: POSTs complaints with file upload
- /admin: POSTs resolution proofs
- /: redirects to login interface

index.html
Dark-themed role-based login page. Handles dynamic input switching and redirects based on selected role.

civilian.html
Complaint submission form for users to enter issue description and attach image evidence. POSTs to Flask and saves info to DB + file storage. Uses toast for confirmation.

admin.html
Admin form for submitting resolution details based on complaint ID. Uploads resolution photo and stores notes in DB. Instant feedback via toast UI.

style.css
Optional custom styling to override Bootstrap defaults, define layout spacing, background themes, text colors, and shadow effects for components.

script.js
Frontend JavaScript logic for toggling fields based on selected role (admin vs civilian), validating IDs, and routing to the correct dashboard. Cleanly separates UI logic from HTML.

db.sqlite3
Generated automatically to persist complaint and resolution records. Local, lightweight, and portable.

---

🎯 What the App Does

This is a citizen-first web platform to report civic issues (like potholes, damaged infrastructure, or garbage), submit image proof, and track resolutions. Admins receive complaints, upload completion reports and proof, and resolve items publicly. Built with Flask, SQLite, and Bootstrap, it emphasizes simplicity, responsiveness, and a clean UI for two-way communication between people and local authorities. Every image and record is stored and timestamped locally, with instant feedback on each interaction. It promotes transparency, civic responsibility, and accountability in local governance.
