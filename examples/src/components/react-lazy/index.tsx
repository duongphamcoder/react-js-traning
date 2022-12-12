import { FunctionComponent, lazy, Suspense } from 'react';

const Dialog = lazy(() => import('./Dialog'));

const Lazy: FunctionComponent = () => {
  return (
    <section className="lazy-wrapper">
      <Suspense fallback={<p>Loading...</p>}>
        <Dialog>Lazy demo</Dialog>
      </Suspense>
    </section>
  );
};

export default Lazy;
