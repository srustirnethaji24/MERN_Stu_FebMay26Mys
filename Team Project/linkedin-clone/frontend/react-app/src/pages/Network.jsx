import { useState, useEffect } from 'react';
import { searchProfiles, sendConnectionRequest } from '../services/api';

const Network = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setMessage('');
    try {
      const res = await searchProfiles(searchTerm);
      setUsers(res.data.users);
    } catch (err) {
      console.error('Search error:', err);
    }
    setLoading(false);
  };

  const handleConnect = async (userId) => {
    try {
      await sendConnectionRequest(userId);
      setMessage('Connection request sent!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Failed to send request');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Find Professionals</h2>
      
      <form onSubmit={handleSearch} style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search by skill (e.g., JavaScript, React, Node.js)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchBtn}>Search</button>
      </form>

      {message && <p style={styles.message}>{message}</p>}

      {loading ? (
        <p style={styles.loading}>Searching...</p>
      ) : (
        <div style={styles.results}>
          {users.length === 0 && searchTerm && (
            <p style={styles.empty}>No users found with skill "{searchTerm}"</p>
          )}
          
          {users.map((user) => (
            <div key={user._id} style={styles.card}>
              <div style={styles.userInfo}>
                <div style={styles.avatar}>{user.name?.charAt(0).toUpperCase()}</div>
                <div style={styles.details}>
                  <strong style={styles.name}>{user.name}</strong>
                  <p style={styles.headline}>{user.headline || 'No headline'}</p>
                  <div style={styles.skills}>
                    {user.skills?.slice(0, 4).map((skill, i) => (
                      <span key={i} style={styles.skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={() => handleConnect(user._id)} style={styles.connectBtn}>
                + Connect
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: '20px auto',
    padding: '0 20px'
  },
  title: {
    color: '#283e4a',
    marginBottom: '20px'
  },
  searchBox: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px'
  },
  searchInput: {
    flex: 1,
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '24px',
    fontSize: '14px'
  },
  searchBtn: {
    backgroundColor: '#0077b5',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '24px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  message: {
    backgroundColor: '#e1ecf4',
    color: '#0077b5',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '16px',
    textAlign: 'center'
  },
  results: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userInfo: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  },
  avatar: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#0077b5',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  name: {
    fontSize: '16px',
    color: '#283e4a'
  },
  headline: {
    color: '#666',
    fontSize: '13px',
    margin: '4px 0'
  },
  skills: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap'
  },
  skill: {
    backgroundColor: '#e1ecf4',
    color: '#0077b5',
    padding: '2px 10px',
    borderRadius: '12px',
    fontSize: '12px'
  },
  connectBtn: {
    backgroundColor: 'white',
    color: '#0077b5',
    border: '1px solid #0077b5',
    padding: '8px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  loading: {
    textAlign: 'center',
    color: '#666'
  },
  empty: {
    textAlign: 'center',
    color: '#666',
    padding: '40px'
  }
};

export default Network;