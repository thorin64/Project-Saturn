import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Bem-vindo, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
