import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe, FaUser } from 'react-icons/fa';

function UserCard({ user }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
               style={{ width: '50px', height: '50px' }}>
            <FaUser className="text-white" />
          </div>
          <div>
            <h5 className="card-title mb-1">{user.name}</h5>
            <small className="text-muted">@{user.username}</small>
          </div>
        </div>
        
        <div className="d-flex align-items-center mb-2">
          <FaEnvelope className="text-muted me-2" size={14} />
          <small className="text-truncate">{user.email}</small>
        </div>
        
        <div className="d-flex align-items-center mb-2">
          <FaPhone className="text-muted me-2" size={14} />
          <small>{user.phone}</small>
        </div>
        
        <div className="d-flex align-items-center">
          <FaGlobe className="text-muted me-2" size={14} />
          <small className="text-truncate">{user.website}</small>
        </div>
      </div>
    </div>
  );
}

export default UserCard;