import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Contacts from "./pages/contacts";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}
