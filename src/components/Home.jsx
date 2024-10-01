import Userfront, { SignupForm } from '@userfront/toolkit';
Userfront.init('6nzz9z8n');
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <SignupForm />
    </div>
  );
}

export default Home;
