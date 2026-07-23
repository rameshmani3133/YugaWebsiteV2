import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";

function MainLayout() {
  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;