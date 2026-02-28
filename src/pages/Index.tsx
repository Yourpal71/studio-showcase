import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "@/lib/auth";
import Login from "./Login";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/portfolio", { replace: true });
    }
  }, [navigate]);

  return <Login />;
};

export default Index;
