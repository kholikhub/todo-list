import { useState } from "react";
import FetchData from "../Utils/Fetch";
import {useNavigate} from "react-router-dom";
import ForAddComponent from "../types/ForAddComponent";

const AddComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [is_active, setIsActive] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("trigger submit");
    const AddCategory: ForAddComponent = {
      category_name: name,
      category_description: description,
      is_active: is_active,
    };

    const options = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
       },
      body: JSON.stringify(AddCategory),
    };

    const response = await FetchData(
      "https://library-crud-sample.vercel.app/api/category/create",
      options
    );
    setName(response.category_name);
    setDescription(response.category_description);
    setIsActive(response.is_active);
    if (response) {
      alert("success add Category!");
      navigate("/Dashboard");
    }
  };

  return (
    <div className=" flex justify-center ">
      <h1 className="m-2 ">Add Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="mx-3 px-2 border-2"
          placeholder="name"
          onChange={(e: any) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="mx-3 px-2 border-2"
          placeholder="description"
          onChange={(e: any) => {
            setDescription(e.target.value);
          }}
        />

        <button 
        className=" border-2 p-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddComponent;
