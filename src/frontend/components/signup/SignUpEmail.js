import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function SignUpEmail() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <SignUpEmailFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="firstName">First Name </Label>
      <Input
        type="text"
        name="firstName"
        placeholder="First Name"
        ref={register({
          required: "First Name Required",
          minLength: { value: 3, message: "Too Short" },
        })}
      />
      {errors.firstName && <Error>{errors.firstName.message}</Error>}

      <Label htmlFor="lastName">Last Name </Label>
      <Input
        type="text"
        name="lastName"
        placeholder="Last Name"
        ref={register({
          required: "Last Name Required",
          minLength: { value: 3, message: "Too Short" },
        })}
      />
      {errors.lastName && <Error>{errors.lastName.message}</Error>}

      <Label htmlFor="firstName">Email </Label>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        ref={register({
          required: "Email required",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Enter a valid e-mail address",
            }
        })}
      />
      {errors.email && <Error>{errors.email.message}</Error>}

      <Label htmlFor="firstName">Password </Label>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        ref={register({
          required: "Password required",
          minLength: { value: 8, message: "Too Short" },
        })}
      />
      {errors.password && <Error>{errors.password.message}</Error>}
      <SubmitButton type="submit">Continue</SubmitButton>
    </SignUpEmailFormWrapper>
  );
}

const SignUpEmailFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  min-width: 30%;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

const SubmitButton = styled.button`
 min-width: 25%;
 padding: 10px;
 border-radius: 2px;
 margin-top: 20px;
 background-color: gray;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bolder;

`;
const Error = styled.span`
  font-size: 14px;
  font-weight: bolder;
  color: red;
  margin: 0 0 10px 0;
`;
