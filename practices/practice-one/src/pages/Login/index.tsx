import Button from "components/Button";
import Heading from "components/Heading";

const LoginPage = () => {
  return (
    <section className="login">
      <Heading title="Wellcome to Website" />
      <section className="login-btn">
        <Button title="Login with Facebook" />
        <Button title="Login with Google" />
      </section>
    </section>
  );
};

export default LoginPage;
