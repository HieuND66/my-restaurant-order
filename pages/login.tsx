import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setValues,
    resetForm,
    values,
    errors,
    setFieldValue,
    touched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      router.back();
    },
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          "https://61d6ec7035f71e0017c2e8de.mockapi.io/foods"
        );
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold">login form</h3>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            className="box"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            className="box"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">remember me</label>
          </div>
          <button type="submit" className="btn">
            Login Now
          </button>
          <p>
            forget password? <a href="#">click here</a>
          </p>
          <p>
            don't have an account? <a href="#">create one</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
