import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignUpComponent = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/"
      />
    </div>
  );
};

export default SignUpComponent;
