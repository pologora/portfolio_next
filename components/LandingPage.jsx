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

const LandingPage = ({darkModeToggle, darkMode}) => {
  const fireflyElements = firefliesElementsRenderer(FIREFLIES_QUANTITY);

  return (
    <section
      className={`lendingPage overflow-hidden `}
      style={{
        backgroundImage: `${
          darkMode ?
            'url(\'/img/forest1.jpg\')' : // eslint-disable-next-line quotes
              "url('/img/ocean.jpg')"
        }`,
      }}
    >
      <div className="relative container mx-auto">
        <Header darkModeToggle={darkModeToggle} darkMode={darkMode} />
        <Navbar />
        <Title />
        {darkMode && fireflyElements}
      </div>
    </section>
  );
};
export default LandingPage;
