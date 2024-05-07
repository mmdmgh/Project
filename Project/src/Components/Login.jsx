import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-full  mt-32 flex items-center justify-center">
      <div className="bg-blue-300 p-10 max-w-80">
        <div className="text-2xl font-semibold mb-6">Login</div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center"
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="mb-2 p-2"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="p-2"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <div className="w-11/12 flex gap-2 mt-5">
            <Link className="border p-2 w-1/2 flex justify-center" to='/signup'><button >Sign Up</button></Link>
            <button className="border p-2 w-1/2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
