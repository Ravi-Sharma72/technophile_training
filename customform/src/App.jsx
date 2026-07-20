import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required().min(5).max(15),
  email: yup.string().required(),
});
function App() {
  const { register, handleSubmit , formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const demo=(data)=>{
              console.log(data)
  }

  return (
    <>
      <div className="items-center flex justify-center">
        <div className="mt-5 justify-center ">
          <h1 className="text-amber-600 text-center mb-4">Login Form</h1>
          <form onSubmit={handleSubmit(() =>demo)}>
            <input
              {...register("name")}
              type="text"
              placeholder="userId"
              className="form-control mb-2 border pl-1"
            />
            {errors.name && <p className="text-amber-700">{errors.name.message}</p>}
            <br />

            <input
              {...register("email")}
              type="email"
              placeholder="enter email"
              className="form-control mb-2 border pl-1"
            />
            <br />
            <input
              type="submit"
              value="submit"
              className="btn  bg-amber-400 mb-2 rounded-4xl w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
