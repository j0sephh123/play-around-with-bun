import "./App.css";
import useUsersQuery from "./hooks/useUsersQuery";

function App() {
  const users = useUsersQuery();

  if (!users) {
    return null;
  }

  return (
    <div style={{ background: "#333", color: "#FFF", padding: "20px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderColor: "#666",
          color: "#FFF",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #666", padding: "10px" }}>ID</th>
            <th style={{ border: "1px solid #666", padding: "10px" }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name }) => (
            <tr key={id}>
              <td style={{ border: "1px solid #666", padding: "10px" }}>
                {id}
              </td>
              <td style={{ border: "1px solid #666", padding: "10px" }}>
                {name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
