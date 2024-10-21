import Button from "../Elements/Button/Index";
import LabeledInputs from "../Elements/LabeledInputs/Index";

const FormForgotPassword = () => {
    return (
      <form action="">
        <div className="mb-6">
          <LabeledInputs
            label="Email Address"
            type="email"
            placeholder="hello@example.com"
            name="email"
          />
        </div>
        <Button variant="bg-primary w-full text-white" type="submit">
          Password Reset
        </Button>
      </form>
    );
  };
  
  export default FormForgotPassword;