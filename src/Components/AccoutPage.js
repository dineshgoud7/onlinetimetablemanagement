import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function AccountPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const userId = location.state?.userId;
    if (!userId) {
      // Handle case when user ID is not available
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${userId}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [location.state?.userId]);

  return (
    <div>
      <h1>Account Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user data */}
        </div>
      ) : (
        <p>User data not found</p>
      )}
    </div>
  );
}

export default AccountPage;
