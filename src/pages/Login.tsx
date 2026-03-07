import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { login } from "@/lib/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import logo from "@/assets/logo.svg";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate("/portfolio");
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-sm text-center"
      >
        <img src={logo} alt="Portfolio logo" className="mx-auto mb-8 h-25 w-25 object-contain" />
        <h1 className="mb-2 text-2xl font-light tracking-[0.2em] uppercase text-foreground">
          Production Svcs
        </h1>
        <p className="mb-12 text-sm text-muted-foreground tracking-wide">
          Graphic Production
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className="pl-10 h-12 border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-foreground/20"
              />
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-destructive"
              >
                Incorrect password
              </motion.p>
            )}
          </motion.div>

          <Button
            type="submit"
            className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 tracking-wide text-sm font-normal uppercase"
          >
            View Work
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
