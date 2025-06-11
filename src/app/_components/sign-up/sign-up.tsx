"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InputField from "./input-field/input-field";
import {
  validationSchema,
  AuthFormData,
} from "./input-field/input-field.types";

const AuthForm = () => {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(true);

  const handleFormSwitch = (resetForm: () => void) => {
    resetForm(); // پاک کردن مقدارهای فرم
    setIsSignUp((prev) => !prev);
  };


  const handleSubmit = (values: AuthFormData) => {
    console.log("اطلاعات ارسال شده:", values);
    router.push("/dashboard");

  };

  return (
    <div className="flex relative justify-center items-center mx-auto">
      <Image
        alt=""
        src={"/images/others/2.jpg"}
        width={1000}
        height={1000}
        className="h-screen w-full"
      />
      <div className="absolute flex justify-around w-[90%] h-[700px]">
        <div className="w-[600px] text-gray-100">
          <h2 className="text-3xl font-bold mb-10">Welcome To OnlineShop!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
            vero. Perspiciatis facere quas perferendis similique, nemo illo
            vitae ipsum sunt optio ab consequatur repellat vero magnam. Earum
            repellat dolorem ullam!
          </p>
        </div>

        <Formik
          initialValues={{
            name: isSignUp ? "" : "",
            email: "",
            password: "",
            confirmPassword: isSignUp ? "" : "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ resetForm }) => (
            <div
              className={`w-full max-w-md bg-white/40 p-6 rounded-lg shadow-lg transition-all duration-500 ${
                isSignUp ? "animate-slide-in" : "animate-slide-out"
              }`}
            >
              <h2 className="text-3xl font-bold text-center text-gray-700">
                {isSignUp ? "Create Account" : "Log In"}
              </h2>
              <p className="text-center text-gray-600 text-sm">
                {isSignUp
                  ? "Let's get started with your 30-day free trial"
                  : "Welcome back! Please log in"}
              </p>

              <Form className="mt-6 space-y-6">
                {isSignUp && (
                  <InputField type="text" name="name" label="Name" />
                )}
                <InputField type="email" name="email" label="Email" />
                <InputField type="password" name="password" label="Password" />
                {isSignUp && (
                  <InputField
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                  />
                )}

                <button
                  type="submit"
                  className="w-full py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-900 transition-all"
                >
                  {isSignUp ? "Sign Up" : "Log In"}
                </button>

                <p className="text-center text-white mt-4">
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"}
                  <span
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleFormSwitch(resetForm)}
                  >
                    {isSignUp ? "Log In" : "Sign Up"}
                  </span>
                </p>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthForm;
