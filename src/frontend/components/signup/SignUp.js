import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <StyledTitle>Sign Up </StyledTitle>

      <SignUpWrapper>
        <div className="item">
          Already a member?
          <Link to="/login">
            <strong>Login</strong>
          </Link>
        </div>

        <Button className="item" data-testid="facebook-button" type="primary">
          Continue with Facebook
        </Button>
        <Button className="item" type="primary">
          {" "}
          Continue with Google{" "}
        </Button>
        <Button className="item" type="primary">
          <Link to="/signupemail">Sign up with Email</Link>
        </Button>
      </SignUpWrapper>
    </>
  );
}

const StyledTitle = styled.div`
  margin: 50px auto 20px auto;
  font-weight: bolder;
  font-size: 24px;
  line-height: 30px;
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  min-width: 300px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;
