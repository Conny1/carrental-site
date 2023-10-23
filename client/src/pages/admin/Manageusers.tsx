import styled from "styled-components";

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 28px;
  margin: 20px 0;
  color: #333;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

const UserItem = styled.li`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 18px;
`;

const UserActions = styled.div`
  display: flex;
  gap: 10px;
`;

const UserAction = styled.button`
  background-color: #0074cc;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005aa3;
  }
`;

const ManageUsers = () => {
  const users = [
    { id: 1, name: "User 1", email: "user1@example.com" },
    { id: 2, name: "User 2", email: "user2@example.com" },
    { id: 3, name: "User 3", email: "user3@example.com" },
  ];

  return (
    <UsersContainer>
      <Heading>Manage Users</Heading>
      <UserList>
        {users.map((user) => (
          <UserItem key={user.id}>
            <div>
              <UserName>{user.name}</UserName>
              <div>Email: {user.email}</div>
            </div>
            <UserActions>
              <UserAction>Edit</UserAction>
              <UserAction>Delete</UserAction>
            </UserActions>
          </UserItem>
        ))}
      </UserList>
    </UsersContainer>
  );
};

export default ManageUsers;
