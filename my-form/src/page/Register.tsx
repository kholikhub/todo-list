import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { useContext, useState } from "react";
import { Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";

const { Text } = Typography;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too short!")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const initialValues = {
  name: "",
  password: "",
  email: "",
};

interface FormData {
  name: string;
  password: string;
  email: string;
}

export default function Register() {
    const [name, setName,]= useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const navigate = useNavigate()
    // const handleSubmit = (values: FormData | any) => {
    //   alert(JSON.stringify(values, null, 10));
    //   setName(values.name);
    //   setEmail(values.email);
    //   setPassword(values.password);
    // };

    async function onSubmit(e:any) {
        e.preventDefault()
        // console.log(e.target.email.value)
        setName(e.name);
        setPassword(e.password);
        setEmail(e.email);
        // POST
        const body: FormData = {
            "name": e.target.name.value,
            "password": e.target.password.value,
            "email": e.target.email.value,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };

        try {
            const response = await fetch('https://library-crud-sample.vercel.app/api/user/register', options);
            // handle kalo error harus ngapain
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
        
            const data = await response.json();
            console.log(data);
        
            // next move
            setTimeout(() => {
                alert("Register Success");
                navigate("/login");
            }, 1000);
        
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
    <>
    <div className="mt-5 flex justify-center ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <div className="border-2 p-6">
            <Form onSubmit={onSubmit} >
                <div>
                  <h2 className="font-bold m-4 ">REGISTER ACCOUNT</h2>
                  <div>
                    <label htmlFor="name">User Name</label>
                  </div>
                  <div>
                    <Input
                      value={props.values.name}
                      className="border-2 mb-5 mt-5 bg-slate-100 pr-20 pt-1 rounded "
                      name={"name"}
                      onChange={props.handleChange("name")}
                      status={props.errors.name && "error"}
                    />
                    <br />
                    {props.errors.name && (
                      <Text 
                      type="danger">
                      {props.errors.name}
                      </Text>
                    )}
                  </div>
                  <div className=" mt-4">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div>
                    <Field
                      className="border-2 mb-5 mt-5 bg-slate-100 pr-20 pt-1 rounded "
                      id="password"
                      name="password"
                      placeholder=" ******* "
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="feedback"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="" htmlFor="email">
                      Email
                    </label>
                    <div>
                      <Field
                        id="email"
                        name="email"
                        placeholder="  zaza@gmail.com"
                        type="email"
                        className="border-2 mt-5 bg-slate-100 pr-20 pt-1 rounded "
                      />
                      <ErrorMessage
                        
                        name="email"
                        component="div"
                        className="feedback mt-4"
                      />
                    </div>
                  </div>
                  <div className="pt-7">
                    <button
                      type="submit"
                      className="border-2 p-2 pr-9"
                      onClick={() => {
                      }}
                    >
                      REGISTER
                    </button>
                  </div>
                </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  </>
    )
}
