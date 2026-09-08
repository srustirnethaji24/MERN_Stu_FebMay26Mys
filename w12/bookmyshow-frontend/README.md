# BookMyShow Frontend

React + Vite frontend for the BookMyShow movie booking application.

---

## Prerequisites

Make sure you have these installed:

- **Node.js** v18 or higher → https://nodejs.org
- **npm** v9 or higher (comes with Node.js)
- **Backend server** running at `http://localhost:5000`

---

## Step-by-Step: How to Run

### Step 1 — Open Terminal in the project folder

```
cd bookmyshow-frontend
```

### Step 2 — Install dependencies

```
npm install
```

Wait for it to finish. This installs React, Vite, Redux, Axios, React Router, etc.

### Step 3 — Check the .env file

Open `.env` in the root folder. It should contain:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

If your backend runs on a different port, change `5000` to match.

### Step 4 — Start the backend first

Make sure your `movie-booking-backend` server is running:

```
cd movie-booking-backend
npm run dev
```

It should say something like: `Server running on port 5000`

### Step 5 — Start the frontend

Back in the `bookmyshow-frontend` folder:

```
npm run dev
```

You'll see output like:

```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

### Step 6 — Open in browser

Go to: **http://localhost:5173**

---

## What You Can Do

| Feature | How |
|---|---|
| Browse movies | Click **Movies** in the navbar |
| Search / filter movies | Use the search box and dropdowns on Movies page |
| Sign up | Click **Signup** |
| Log in | Click **Login** |
| Book tickets | Click a movie → select a show → pick seats → Confirm |
| View my bookings | Click **My Bookings** |
| Cancel a booking | Click **Cancel Booking** on any active booking |
| Admin panel | Log in as admin → click **Admin** in navbar |
| Manage movies | Admin → Movies (Create / Edit / Delete) |
| Manage shows | Admin → Shows (Create / Edit / Delete) |
| Dashboard stats | Admin → Dashboard (live counts) |

---

## Project Structure

```
bookmyshow-frontend/
├── public/
├── src/
│   ├── api/               ← All backend API calls
│   │   ├── axios.js       ← Axios instance with JWT interceptor
│   │   ├── authApi.js     ← Login, signup
│   │   ├── movie.api.js   ← Movie CRUD
│   │   ├── show.api.js    ← Show CRUD
│   │   ├── booking.api.js ← Booking operations
│   │   └── admin.api.js   ← Admin dashboard stats
│   ├── components/        ← Reusable UI components
│   │   ├── admin/         ← Admin-specific forms
│   │   ├── Navbar.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── MovieCard.jsx
│   │   ├── ShowCard.jsx
│   │   ├── BookingCard.jsx
│   │   ├── Seat.jsx
│   │   ├── SeatGrid.jsx
│   │   └── Pagination.jsx
│   ├── context/
│   │   └── AuthContext.jsx  ← Global auth state (JWT, user, login/logout)
│   ├── layouts/
│   │   ├── PublicLayout.jsx ← Navbar + page content
│   │   └── AdminLayout.jsx  ← Admin sidebar + page content
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Bookings.jsx     ← Seat selection page
│   │   ├── MyBookings.jsx   ← Booking history + cancel
│   │   ├── NotFound.jsx
│   │   └── admin/
│   │       ├── Dashboard.jsx
│   │       ├── MovieManagement.jsx
│   │       └── ShowManagement.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── movies/
│   │       └── moviesSlice.js  ← Movies state with async thunk
│   ├── routes/
│   │   └── AppRoutes.jsx    ← All routes defined here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## Troubleshooting

**"Cannot connect to backend"** — Make sure backend is running on port 5000 and CORS is enabled for `http://localhost:5173`.

**"npm install fails"** — Make sure Node.js v18+ is installed: `node -v`

**White screen after login** — Open browser DevTools (F12) → Console tab and check for errors.

**Seat grid not showing** — The show must have seats data. Create shows via Admin → Shows.

---

## Sprints Implemented

- **Sprint 1** — Project structure, routing, layouts, public pages
- **Sprint 2** — JWT authentication, Context API, protected routes
- **Sprint 3** — Redux Toolkit, movie discovery with search/filter/pagination
- **Sprint 4** — Movie details page, show listing
- **Sprint 5** — Booking backend APIs (implemented in backend)
- **Sprint 6** — Seat selection UI, booking confirmation, My Bookings, cancel
- **Sprint 7** — Admin CRUD for movies and shows
- **Sprint 8** — Live admin dashboard stats
