import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store.js";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import EduFundSpinner from "./pages/modals/spinner/EduFundSpinner.jsx";
import ContextProvider from "./context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={<EduFundSpinner />} persistor={persistor}>
          <ContextProvider>
            <App />
          </ContextProvider>
        </PersistGate>
      </Provider>
    </StrictMode>
    <Toaster position="top-center" />
  </>
);
