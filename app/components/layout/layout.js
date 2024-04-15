import { AuthContextProvider } from "./components/_utils/auth-context";
 
const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
export default Layout;