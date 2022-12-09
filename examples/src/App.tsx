import Button from 'components/button/Button';
import ExampleItem from 'components/example-item/ExamplesItem';
import NameForm from 'components/form/Form';
import Heading from 'components/heading/Heading';
import Lists from 'components/list/Lists';
import { MouseEvent, FormEvent, ChangeEvent } from 'react';

const styles = {
  height: '100vh',
};

function App() {
  const titleHTML = document.querySelector('title') as HTMLTitleElement;
  titleHTML.textContent = 'Example React-Js';

  const clickEvent = (event: MouseEvent) => {
    console.log(event.target);
  };

  const clickShowMessage = () => {
    alert('Ahihihi');
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form: HTMLFormElement = event.target as HTMLFormElement;
    console.log(form['username']);
  };

  const students = [
    'Pham Tan Duong',
    'Mai Quang Hung',
    'Tran Trong Tuyen',
    'Dao Anh Huy',
  ];

  return (
    <section className="app-wrapper" style={styles}>
      <ExampleItem>
        <Heading title="Examples one ( create components )" />
        <Button variant="secondary" onClick={clickEvent}>
          Click me!
        </Button>
        <Button variant="primary" onClick={clickShowMessage}>
          show message
        </Button>
      </ExampleItem>
      <ExampleItem>
        <Heading title="Examples two ( render list )" />
        <Lists list={students} />
        <Lists list={students} type="A" tagName="ol" />
        <Lists list={students} type="a" tagName="ol" />
      </ExampleItem>
      <ExampleItem>
        <Heading title="Examples three ( form )" className={'demo-class'} />
        <NameForm onSubmit={handleSubmit} />
      </ExampleItem>
    </section>
  );
}

export default App;
