import Card from "components/Card/Card";
import { Link, BrowserRouter, NavLink } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <section
        style={{
          width: "1200px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          margin: "30px auto",
        }}>
        <Card
          image="https://i.pinimg.com/564x/59/e3/4f/59e34f84f9b3570ba4f933895adaabaa.jpg"
          timeStamp="September 21, 2022"
          title="Payload lands $4.7M for its developer-first headless CMS"
          category="JavaScript"
          path="111"
        />
      </section>
    </BrowserRouter>
  );
}

export default App;
