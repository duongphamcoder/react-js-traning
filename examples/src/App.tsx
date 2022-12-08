import Button from 'components/button';
import { MouseEvent } from 'react';

function App() {
  const clickEvent = (event: MouseEvent) => {
    console.log(event.target);
  };

  const clickShowMessage = () => {
    alert('Ahihihi');
  };

  const styles = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <section className="app-wrapper" style={styles}>
      <Button variant="secondary" onClick={clickEvent}>
        Click me!
      </Button>
      <Button variant="secondary" onClick={clickShowMessage}>
        show message
      </Button>
    </section>
  );
}

export default App;
