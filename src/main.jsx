import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SupabaseAuthProvider } from "./integrations/supabase/auth";
import { TooltipProvider } from "@/components/ui/tooltip";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SupabaseAuthProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </SupabaseAuthProvider>
  </React.StrictMode>,
);
