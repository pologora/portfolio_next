import Header from './Header';
import Navbar from './Navbar';
import Title from './Title';

const FIREFLIES_QUANTITY = 15;

const firefliesElementsRenderer = (quantity) => {
  const array = [];
  for (let i = 0; i < quantity; i++) {
    array.push(<div key={i} className="firefly"></div>);
  }
  return array;
};

const LandingPage = () => {
  const fireflyElements = firefliesElementsRenderer(FIREFLIES_QUANTITY);
  return (
    <section className="lendingPage overflow-hidden relative">
      <Header />
      <Navbar />
      <Title />
      {fireflyElements}
    </section>
  );
};
export default LandingPage;
