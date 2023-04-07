import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { CustomSidebar } from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/dashboardIndex";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";
import { Route, Routes } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
//Theme provider provides ability to provide themes to our material UI

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <CustomSidebar />

          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              {/* <Route path="/team" element={<Team />}></Route> */}
              {/* <Route path="/contacts" element={<Contacts />}></Route> */}
              {/* <Route path="/invoices" element={<Invoices />}></Route> */}
              {/* <Route path="/form" element={<Form />}></Route> */}
              {/* <Route path="/bar" element={<Bar />}></Route> */}
              {/* <Route path="/pie" element={<Pie />}></Route> */}
              {/* <Route path="/line" element={<Line />}></Route> */}
              {/* <Route path="/faq" element={<FAQ />}></Route> */}
              {/* <Route path="/geography" element={<Geography />}></Route> */}
              {/* <Route path="/calendar" element={<Calendar />}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
