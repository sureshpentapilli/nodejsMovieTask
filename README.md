# Movie Management API

This is a Node.js-based REST API built using Express.js for managing movies. It provides both public and admin-protected routes for accessing and managing movie data.

---

## Features

- Retrieve a list of movies (`/movies`) http://localhost:5000/api/movies (get)
- Search for movies by query (`/search`) http://localhost:5000/api/search?query=title
- Add, update, or delete movie entries (admin only) pass headers key value pairs  x-admin : true if given  true admin can access  or else if you given false throw error access denied
http://localhost:5000/api/movies (post)
http://localhost:5000/api/movies/:id (put)
http://localhost:5000/api/movies/:id (delete)


---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/sureshpentapilli/nodejsMovieTask
  
# project run command
npm run dev