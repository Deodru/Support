import SelectWallet from "./pages/SelectWallet";
import ImportWallet from "./pages/ImportWallet";
import LoadingPage from "./components/Loading";
import Success from "./pages/Success";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useFormContext } from "./context";

export default function App() {
  const { isLoading } = useFormContext();

  return (
    <Router>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route path="/">
            <Route index element={<SelectWallet />} />
            <Route path="import" element={<ImportWallet />} />
            <Route path="success" element={<Success />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}
