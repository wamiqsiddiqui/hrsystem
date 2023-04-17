import { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "../App.css";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { CLIENT_ID } from "../../tokens";

type GoogleLoginProps = {
  setLogin: (isLoggedIn: boolean, user: any) => void;
};

export const GoogleLogin = (props: GoogleLoginProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleCallbackResponse = (
    response: google.accounts.id.CredentialResponse
  ) => {
    console.log("Encoded JWT ID Token: " + response.credential);
    var userObject = jwt_decode(response.credential) as any;
    console.log(JSON.stringify(userObject));
    if (userObject.hd === "mythod.com") {
      props.setLogin(true, userObject);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userObject", JSON.stringify(userObject));
      localStorage.setItem(
        `registered_${userObject.sub}`,
        JSON.stringify(userObject)
      );
    } else {
      alert("Please login from your Mythod Gmail Address");
    }
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv") as HTMLElement,
      {
        theme: "outline",
        size: "large",
        type: "standard",
      }
    );
    google.accounts.id.prompt();
  }, []);
  return (
    <div className="App">
      <img src={"../../assets/hr.png"} className="App-logo" alt="logo" />
      <Typography paddingTop={"20px"} paddingBottom={"20px"} variant="h1">
        Welcome to HR Hiring System
      </Typography>
      <div className="LoginContainer">
        <Typography
          paddingTop={"20px"}
          variant={"h3"}
          color={colors.primary[500]}
        >
          Are you a Mythod Employee?
        </Typography>
        <Typography
          paddingTop={"20px"}
          paddingBottom={"20px"}
          variant="h4"
          className="TextStyle"
        >
          Register Or Login
        </Typography>
        <div id="signInDiv" className="googleButton"></div>
      </div>
    </div>
  );
};
