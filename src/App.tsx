import Topbar from "./pages/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { CustomSidebar } from "./pages/global/Sidebar";

// import Vacancies from "./pages/Vacancies";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";
import { Route, Routes } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Vacancies } from "./pages/vacancies/vacancyIndex";
import Form from "./pages/form/formIndex";
import { createContext, useEffect, useState } from "react";
import { GoogleLogin } from "./pages/googleLogin";
import Dashboard from "./pages/dashboard/index";
//Theme provider provides ability to provide themes to our material UI

export type UserObject = {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  hd: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: string;
  picture: string;
  sub: string;
};
export type UserType = {
  userObject: UserObject;
  updateUser?: () => void;
};
export const AuthenticatedUserContext = createContext({} as UserType);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({} as UserObject);
  const [theme, colorMode] = useMode();
  const logout = () => {
    console.log("Logging out");
    setUser({} as UserObject);
    setLoggedIn(false);
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {!isLoggedIn ? (
          <div>
            <GoogleLogin
              setLogin={function (isLoggedIn: boolean, user: UserObject): void {
                setLoggedIn(isLoggedIn);
                setUser(user);
              }}
            />
          </div>
        ) : (
          <AuthenticatedUserContext.Provider
            value={{ userObject: user, updateUser: logout }}
          >
            <div className="app">
              <CustomSidebar />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/team" element={<Vacancies />}></Route>
                  {/* <Route path="/contacts" element={<Contacts />}></Route> */}
                  {/* <Route path="/invoices" element={<Invoices />}></Route> */}
                  <Route path="/form" element={<Form />}></Route>
                  {/* <Route path="/bar" element={<Bar />}></Route> */}
                  {/* <Route path="/pie" element={<Pie />}></Route> */}
                  {/* <Route path="/line" element={<Line />}></Route> */}
                  {/* <Route path="/faq" element={<FAQ />}></Route> */}
                  {/* <Route path="/geography" element={<Geography />}></Route> */}
                  {/* <Route path="/calendar" element={<Calendar />}></Route> */}
                </Routes>
              </main>
            </div>
          </AuthenticatedUserContext.Provider>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
