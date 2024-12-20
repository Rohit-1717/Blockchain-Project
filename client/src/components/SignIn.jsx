import React, { useState } from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInComponent = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignInUrl="/"
      />
    </div>
  );
};

export default SignInComponent;
