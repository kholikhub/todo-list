import { useNavigate } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent";
import CategoryComponent from "../Components/CategoryComponent";
import EditComponent from "../Components/EditComponent";

  const DashboardComponent= () => {
  
    const navigate = useNavigate();

    return (
        <div>
          <HeaderComponent />
          <div className="">
            <h1 className="flex justify-center text-5xl font-semibold ">My Dashborad</h1>
            <div>
            <CategoryComponent />
            </div>
          </div>
            <br />
            <br />
            <a
            onClick={() => navigate('/AddComponent')}
            className="flex justify-center text-4xl font-bold text-green-500"
            >
            Create New
            </a>
        </div>
    );
  };
export default DashboardComponent;
