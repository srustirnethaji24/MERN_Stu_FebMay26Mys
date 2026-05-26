import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>LinkedIn Clone</Link>
        
        {user ? (
          <div style={styles.navLinks}>
            <Link to="/" style={styles.link}>Feed</Link>
            <Link to="/profile" style={styles.link}>My Profile</Link>
            <Link to="/connections" style={styles.link}>Connections</Link>
            <Link to="/network" style={styles.link}>Network</Link>
            <span style={styles.userName}>👤 {user.name}</span>
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </div>
        ) : (
          <div style={styles.navLinks}>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#283e4a',
    padding: '12px 0',
    color: 'white'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px'
  },
  userName: {
    fontSize: '14px',
    fontWeight: 'bold'
  },
  logoutBtn: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Navbar;