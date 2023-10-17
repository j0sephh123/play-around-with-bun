import "./App.css";
import useUsersQuery from "./hooks/useUsersQuery";

function App() {
  const users = useUsersQuery();

  if (!users) {
    return null;
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

export default App;
