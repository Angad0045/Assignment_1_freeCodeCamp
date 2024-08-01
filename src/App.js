// import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Page_One from "./Components/Page_One";
import Sign_Up from "./Components/Sign_Up";
import Header from "./Components/Header";
import Page_Two from "./Components/Page_Two";
import { AuthContextProvider } from "./Context/AuthContext";
import Protect from "./Utilise/Protect";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
          {/* <Page_One /> */}
          <Route path="/" element={<Page_One />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route
            path="/pagetwo"
            element={
              <Protect>
                <Page_Two />
              </Protect>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
