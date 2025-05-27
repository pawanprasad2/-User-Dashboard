# User Management Dashboard

This is a React-based dashboard that displays user data fetched from the JSONPlaceholder API. The application is styled with Bootstrap 5 and uses React Icons for visual enhancements.

## Features

- **API Integration:** Retrieves users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- **User Search:** Filter users by name or email.
- **Pagination:** View users across pages.
- **Responsive Design:** Built with Bootstrap 5 for a mobile-friendly interface.
- **Clean Code:** Uses ESLint for maintaining code quality.

## API Integration

The application fetches user data from the following endpoint:
- **GET** [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

The fetched data is filtered based on search criteria and paginated on the dashboard.

## Features

- **API Integration:** Fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- **User Cards:** Displays user details such as name, username, email, phone, and website in a card layout.
- **Search:** Quickly filter users by name or email.
- **Pagination:** Navigate through users with simple pagination controls.
- **Responsive Design:** Mobile-friendly layout using Bootstrap 5.
- **Modern React:** Built with functional components and hooks.

---

## Project Structure

```
.
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    └── components/
        ├── Dashboard.jsx
        └── UserCard.jsx

- **`src/main.jsx`**: Application entry point.
- **`src/App.jsx`**: Loads the Dashboard.
- **`src/components/Dashboard.jsx`**: Main component that handles user fetching, search, and pagination. See [`Dashboard`](src/components/Dashboard.jsx).
- **`src/components/UserCard.jsx`**: Renders individual user details. See [`UserCard`](src/components/UserCard.jsx).

```
## Dependencies

- [React](https://react.dev/) & [React DOM](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Bootstrap 5](https://getbootstrap.com/)

