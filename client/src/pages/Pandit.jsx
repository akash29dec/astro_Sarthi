import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Pandit() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role !== "astrologer") return <Navigate to="/" />;
  return (
    <div className="container py-5">
      <h2>Welcome, Pandit {user.name}!</h2>
      {/* Add astrologer dashboard UI here */}
    </div>
  );
}
