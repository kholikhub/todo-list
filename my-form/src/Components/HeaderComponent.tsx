import { useNavigate } from "react-router-dom";
import {useState, useEffect, useContext} from "react"
import { ProfileContext } from "../Context/ProfileContext";


const HeaderComponent = () => {
    const navigate = useNavigate ();
    const [name, setName] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const profile = useContext(ProfileContext);
    console.log(localStorage.getItem("token"));
    async function handleLogout(event: any) {
        const option = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          };
        try {
            const response = await fetch(
                "https://library-crud-sample.vercel.app/api/user/logout",option);
            if(!response.ok){
                throw new Error("Login Failed");
            }
            const data = await response.json();
            console.log(data);

            setTimeout(() => {
                alert("Logout Success");
                localStorage.removeItem('token');
                navigate("/");
            }, 1000);
        } catch (error) {
            console.error("Error:", error);
        }   
    }

    // useEffect(() =>{
    //     async function getProfile() {
    //         const option = {
    //             method:"GET",
    //             header: {
    //                 "Content-Type": "application/json",
    //                 Authorozation: "Bearer" + localStorage.getItem("token"),
    //             },
    //         };

    //         try {
    //         const response = await fetch(
    //             "https://library-crud-sample.vercel.app/api/user/profile", option);
    //             if(!response.ok){
    //                 throw new Error("Profile Eror");
    //             }
    //             const jsonData = await response.json();
    //             console.log(jsonData);
    //             setResponse(JSON.stringify(jsonData))
    //         } catch (error){
    //             console.error("Error:", error);
            
    //     }
    // }
    // getProfile()
    // },[]);

    return (
        <header>
            <div className="flex justify-evenly">
                <h1 className=" text-xl">Profile: {profile.name}</h1>
                <div>{response}</div>
                <button
                onClick={handleLogout}
                className=" border-2 m-1 p-2 bg-blue-400 font-bold"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default HeaderComponent;