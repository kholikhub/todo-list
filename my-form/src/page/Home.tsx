import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="m-4 text-center text-2xl font-semibold mb-10">
       <h1>HELLO WELCOME TO MY ASSIGNMENT</h1>
      <div>
        <h2>Let`s try to create account and save your data ini here </h2>
      </div>
      </div>
      <div className=" flex justify-center">
        <button
          className=" border-2 m-10 p-2" 
          onClick={() => {
          navigate("/FormLogin");
          }}
          >
          Login
          </button>
        <button 
          className=" border-2 m-10 p-2"
          onClick={() => {
          navigate("/Register");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
