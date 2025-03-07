import "../css/App.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div className="login-wrapper">
        <form name="base-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="example@gmail.com"
          />
          {errors.email && <span>email is required</span>}
          <input
            {...register("passwd", { required: true })}
            type="password"
            placeholder="password"
          />
          {errors.passwd && <span>enter is required</span>}
          <button type="submit"> submit </button>
        </form>
      </div>
    </>
  );
};

export default Login;
