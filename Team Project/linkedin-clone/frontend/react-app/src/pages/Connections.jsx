import { useState, useEffect } from 'react';
import { getConnectionRequests, getConnections, acceptRequest, rejectRequest } from '../services/api';

const Connections = () => {
  const [requests, setRequests] = useState([]);
  const [connections, setConnections] = useState([]);
  const [activeTab, setActiveTab] = useState('requests');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [reqRes, connRes] = await Promise.all([
        getConnectionRequests(),
        getConnections()
      ]);
      setRequests(reqRes.data.requests);
      setConnections(connRes.data.connections);
    } catch (err) {
      console.error('Error fetching connections:', err);
    }
  };

  const handleAccept = async (requestId) => {
    try {
      await acceptRequest(requestId);
      fetchData();
    } catch (err) {
      console.error('Error accepting:', err);
    }
  };

  const handleReject = async (requestId) => {
    try {
      await rejectRequest(requestId);
      fetchData();
    } catch (err) {
      console.error('Error rejecting:', err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.tabs}>
        <button 
          onClick={() => setActiveTab('requests')}
          style={{...styles.tab, ...(activeTab === 'requests' ? styles.activeTab : {})}}
        >
          Requests ({requests.length})
        </button>
        <button 
          onClick={() => setActiveTab('connections')}
          style={{...styles.tab, ...(activeTab === 'connections' ? styles.activeTab : {})}}
        >
          My Connections ({connections.length})
        </button>
      </div>

      {activeTab === 'requests' ? (
        <div>
          {requests.length === 0 ? (
            <p style={styles.empty}>No pending connection requests</p>
          ) : (
            requests.map((req) => (
              <div key={req._id} style={styles.card}>
                <div style={styles.userInfo}>
                  <div style={styles.avatar}>{req.from?.name?.charAt(0).toUpperCase()}</div>
                  <div>
                    <strong>{req.from?.name}</strong>
                    <p style={styles.headline}>{req.from?.headline}</p>
                  </div>
                </div>
                <div style={styles.actions}>
                  <button onClick={() => handleAccept(req._id)} style={styles.acceptBtn}>Accept</button>
                  <button onClick={() => handleReject(req._id)} style={styles.rejectBtn}>Reject</button>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div>
          {connections.length === 0 ? (
            <p style={styles.empty}>No connections yet. Find people in Network!</p>
          ) : (
            connections.map((conn) => (
              <div key={conn._id} style={styles.card}>
                <div style={styles.userInfo}>
                  <div style={styles.avatar}>{conn.name?.charAt(0).toUpperCase()}</div>
                  <div>
                    <strong>{conn.name}</strong>
                    <p style={styles.headline}>{conn.headline}</p>
                    <div style={styles.skills}>
                      {conn.skills?.slice(0, 3).map((skill, i) => (
                        <span key={i} style={styles.skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
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
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px'
  },
  tab: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#e1ecf4',
    color: '#0077b5',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  activeTab: {
    backgroundColor: '#0077b5',
    color: 'white'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
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
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#0077b5',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  headline: {
    color: '#666',
    fontSize: '13px',
    margin: '4px 0'
  },
  actions: {
    display: 'flex',
    gap: '8px'
  },
  acceptBtn: {
    backgroundColor: '#0077b5',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '16px',
    cursor: 'pointer'
  },
  rejectBtn: {
    backgroundColor: '#fff',
    color: '#666',
    border: '1px solid #ddd',
    padding: '8px 16px',
    borderRadius: '16px',
    cursor: 'pointer'
  },
  skills: {
    display: 'flex',
    gap: '6px',
    marginTop: '4px'
  },
  skill: {
    backgroundColor: '#e1ecf4',
    color: '#0077b5',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '12px'
  },
  empty: {
    textAlign: 'center',
    color: '#666',
    padding: '40px'
  }
};

export default Connections;