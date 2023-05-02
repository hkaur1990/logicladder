import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DatatablePage from "./DatatablePage";
import "./Login.css"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Simulate a login request
    if (data.email === "test@example.com" && data.password === "password") {
      alert("Login successful!");

      navigate("/DatatablePage");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <br />
      <label>Password</label>
      <input {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
