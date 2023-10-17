import * as Table from "./components/Table";
import useUsersQuery from "./hooks/useUsersQuery";

function App() {
  const users = useUsersQuery();

  if (!users) {
    return null;
  }

  return (
    <div style={{ background: "#333", color: "#FFF", padding: "20px" }}>
      <Table.Wrapper>
        <Table.Head>
          <Table.Row>
            <Table.Label>ID</Table.Label>
            <Table.Label>Name</Table.Label>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {users.map(({ id, name }) => (
            <Table.Row key={id}>
              <Table.Cell>{id}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Wrapper>
    </div>
  );
}

export default App;
