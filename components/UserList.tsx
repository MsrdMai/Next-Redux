import { useGetUsersQuery } from '../redux/services/userApi';

function UserList() {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching users</div>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default UserList;
