import { useState } from "react";
import { Outlet } from "react-router-dom";

import HeaderMain from "../header/HeaderMain";
import BackBlur from "../common/BackBlur";
import Footer from "../Footer/Footer";

function Layout() {
  const [blur, setBlur] = useState(false);

  return (
    <div>
      <HeaderMain setBlur={setBlur} />
      <Outlet />
      <Footer></Footer>

      {blur && <BackBlur />}
    </div>
  );
}

export default Layout;
