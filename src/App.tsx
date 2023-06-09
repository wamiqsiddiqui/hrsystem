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
// import Geography from "./scenes/geography";
import { Route, Routes } from "react-router-dom";
import { Vacancies } from "./pages/vacancies/vacancyIndex";
import { AddVacancy } from "./pages/addVacancy/addVacancyIndex";
import { createContext, useState } from "react";
import { GoogleLogin } from "./pages/login/googleLogin";
import Dashboard from "./pages/dashboard/index";
import { Calendar } from "./pages/calender/indexCalender";
import { FAQ } from "./pages/faq/faqIndex";
import { Users } from "./pages/users/userIndex";
import { UserObject } from "./models/UserObject";
import { AddHiringSession } from "./pages/addHiringSession/hiringSessionIndex";
//Theme provider provides ability to provide themes to our material UI

export type UserType = {
  userObject: UserObject;
  updateUser?: () => void;
};
export const AuthenticatedUserContext = createContext({} as UserType);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" ? true : false
  );
  const [user, setUser] = useState(
    localStorage.getItem("userObject") === null
      ? ({} as UserObject)
      : (JSON.parse(localStorage.getItem("userObject") ?? "") as UserObject)
  );
  const [theme, colorMode] = useMode();
  const logout = () => {
    setUser({} as UserObject);
    setLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
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
                  <Route path="/form" element={<AddVacancy />}></Route>
                  <Route path="/users" element={<Users />}></Route>
                  <Route
                    path="/addHiringSession"
                    element={<AddHiringSession />}
                  ></Route>
                  {/* <Route path="/bar" element={<Bar />}></Route> */}
                  {/* <Route path="/pie" element={<Pie />}></Route> */}
                  {/* <Route path="/line" element={<Line />}></Route> */}
                  <Route path="/faq" element={<FAQ />}></Route>
                  {/* <Route path="/geography" element={<Geography />}></Route> */}
                  <Route path="/calendar" element={<Calendar />}></Route>
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
