import CommonForm from "@/components/common/CommonForm";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName:'',
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  console.log(formData);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    console.log(formData ,"userData");
    dispatch(registerUser(formData)).then((data) => {
      if(data?.payload?.success) navigate('/auth/login')
      // navigate("/auth/login");
      console.log(data);
      
    });
    
  }
  console.log(formData);
  
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2 ">
          Already have an account{" "}
          <Link
            to="/auth/login"
            className="font-medium ml-2 text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Signup"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
