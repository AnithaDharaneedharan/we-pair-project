import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <SignUpWrapper>
      <div className="signup-form">HOME</div>
      <Link to="/signup">Sign Up</Link>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
  .signup-form {
    margin: 50px auto 20px auto;
    font-weight: bolder;
  }
  li {
    list-style: none;
  }
  .btn {
    padding: 10px;
    margin: 10px;
    min-width: 300px;
    border-radius: 5px;
  }
`;
