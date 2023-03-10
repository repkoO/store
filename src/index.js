import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client = {queryClient}>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
    </QueryClientProvider>
);
