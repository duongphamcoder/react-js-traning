import Button from "components/Button/Button";
import Heading from "components/Heading/Heading";

function LoginPage() {
  return (
    <section className="login">
      <Heading title="Wellcome to Website" />
      <section className="login-btn">
        <Button title="Login with Facebook" />
        <Button title="Login with Google" />
      </section>
    </section>
  );
}

export default LoginPage;
