import { Fragment } from 'react';

// Components
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

const Layouts = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layouts;
