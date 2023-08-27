import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/login");
  };
  const onRegister = () => {
    navigate("/register");
  };
  const onGreet = () => {
    navigate("/greet");
  };
  const onAPI = () => {
    navigate("/api");
  };
  return (
    <div>
      <p>This is home page</p>
      <div onClick={onLogin}>Login</div>
      <div onClick={onRegister}>Register</div>
      <div onClick={onGreet}>Greet</div>
      <div onClick={onAPI}>API</div>
    </div>
  );
};

export default Home;
