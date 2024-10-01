import Userfront from '@userfront/toolkit';
function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <div>Пользователь с mail: {Userfront.user.email}</div>
      <button onClick={Userfront.logout}>Logout</button>
    </>
  );
}

export default Dashboard;
