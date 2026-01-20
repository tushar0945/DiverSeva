import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import { useAuth } from "../auth.context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("dummy-token-123"); // simulate login
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow">
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <div className="space-y-4">
          <Input label="Mobile / Email" placeholder="Enter value" />
          <Input label="Password / OTP" placeholder="Enter value" />

          <Button onClick={handleLogin} className="w-full">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
