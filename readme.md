# LifeLink 

LifeLink is a modern web platform that connects blood donors with those in need, organizes blood donation camps, and provides information about blood compatibility and donation centers. Built with React, Tailwind CSS, Node.js, Express, and MongoDB.

## Features

- 🌟 *Find Donation Centers:* Search and filter blood banks by city and name.
- 🩸 *Request Blood:* Submit urgent or scheduled blood requests.
- 🏥 *Organize Blood Camps:* Institutions can request to host donation camps.
- 🔒 *User Authentication:* Sign in/register as a donor.
- 🧬 *Blood Compatibility Info:* Interactive compatibility charts and facts.
- 📊 *Dashboard:* Donor dashboard with donation history and notifications.
- 📞 *Contact & Support:* Emergency and general support channels.
- 🎨 *Responsive UI:* Modern, mobile-friendly design with Tailwind CSS.

## Tech Stack

- *Frontend:* React, TypeScript, Tailwind CSS, Vite
- *Backend:* Node.js, Express, MongoDB, Mongoose
- *Other:* React Router, Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Setup

#### 1. Clone the repository

sh
git clone https://github.com/your-username/lifelink.git
cd lifelink


#### 2. Install dependencies

- *Frontend:*
  sh
  cd project
  npm install
  

- *Backend:*
  sh
  cd ../server
  npm install
  

#### 3. Configure environment variables

Create a .env file in the server directory:


MONGO_URI=your_mongodb_connection_string
PORT=5000


#### 4. Run the backend server

sh
cd server
npm start


#### 5. Run the frontend

sh
cd ../project
npm run dev


- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000](http://localhost:5000)

## Project Structure


project/
  src/
    components/
    App.tsx
    main.tsx
    ...
server/
  models/
  routes/
  index.js
  ...


*Crafted with ❤ by Team Codeus*