import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}
