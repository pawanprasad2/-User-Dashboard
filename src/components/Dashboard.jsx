import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import {
  FaUsers,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const pageSize = 6;

  const fetchUsers = async (currentPage, searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const allUsers = await response.json();

      const filtered = searchTerm
        ? allUsers.filter(
            (user) =>
              user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              user.email.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : allUsers;

      const startIndex = (currentPage - 1) * pageSize;
      const paginatedData = filtered.slice(startIndex, startIndex + pageSize);

      setUsers(paginatedData);
      setTotalUsers(filtered.length);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page, search);
  }, [page, search]);

  const totalPages = Math.ceil(totalUsers / pageSize);
  const paginatedUsers = users;

  return (
    <>
      {/* Header */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <FaUsers size={60} className="mb-3 opacity-75" />
          <h1 className="display-4 fw-bold mb-2">User Management Dashboard</h1>
        </div>
      </div>
      <div
        className="bg-light min-vh-100 p-1"
        style={{ borderRadius: "2rem 2rem 0 0", marginTop: "-2rem" }}
      >
        <div className="container py-5">
          {/* Search */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-10 col-lg-8">
              <div className="input-group shadow-sm rounded overflow-hidden border focus-ring">
                <input
                  type="text"
                  className="form-control border-0 ps-3 py-3"
                  placeholder="Search users by name..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                />
                <button
                  className="btn  px-4 d-flex text-white bg-primary align-items-center"
                  type="button"
                >
                  <FaSearch className="me-2" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div
                className="spinner-border text-primary"
                style={{ width: "3rem", height: "3rem" }}
              ></div>
              <p className="mt-3 text-muted">Loading users...</p>
            </div>
          ) : (
            <>
              {/* Users Grid */}
              <div className="row g-4 mb-5">
                {paginatedUsers.map((user) => (
                  <div className="col-md-6 col-lg-4" key={user.id}>
                    <UserCard user={user} />
                  </div>
                ))}

                {paginatedUsers.length === 0 && (
                  <div className="col-12 text-center py-5">
                    <FaUsers size={80} className="text-muted opacity-50 mb-3" />
                    <h4 className="text-muted">No users found</h4>
                    <p className="text-muted">
                      Try adjusting your search criteria
                    </p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                      <button
                        className="page-link"
                        onClick={() => setPage(page - 1)}
                      >
                        <FaChevronLeft />
                      </button>
                    </li>

                    {[...Array(totalPages)].map((_, idx) => (
                      <li
                        key={idx}
                        className={`page-item ${
                          page === idx + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setPage(idx + 1)}
                        >
                          {idx + 1}
                        </button>
                      </li>
                    ))}

                    <li
                      className={`page-item ${
                        page === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setPage(page + 1)}
                      >
                        <FaChevronRight />
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
