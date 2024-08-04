import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SupabaseProvider } from "./integrations/supabase/index.js";
import { TooltipProvider } from "@/components/ui/tooltip";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SupabaseProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </SupabaseProvider>
  </React.StrictMode>,
);
