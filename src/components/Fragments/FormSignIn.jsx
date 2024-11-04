import LabeledInput from "../Elements/LabeledInputs/Index";
import CheckBox from "../Elements/CheckBox/Index";
import Button from "../Elements/Button/Index";
import { Link } from "react-router-dom";

const FormSignIn = () => {
    return (
      <form action="">
        <div className="mb-6">
          <LabeledInput
            label="Email address"
            type="email"
            placeholder="hello@example.com"
            name="email"
          />
        </div>
        <div className="mb-6">
          <LabeledInput
            label="Password"
            type="password"
            placeholder="*************"
            name="password"
          />
          <Link to='/forgot-password' className="text-primary text-sm font-bold">Forgot Password?</Link>
        </div>
        <div className="mb-3">
          <CheckBox label="Keep me signed in" name="status" />
        </div>
        <Button variant="bg-primary w-full text-white" type="submit" >
            Login
        </Button>
      </form>
    );
  };
  
  export default FormSignIn;