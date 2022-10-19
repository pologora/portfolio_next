import Section from './Section';
import TechStack from './TechStack';
import {description} from '../public/data/about';

const About = () => {
  const descriptionElement = description.map((paragraph, index) => {
    return <p key={index} className='my-10 dark:opacity-60'>{paragraph}</p>;
  });
  return (
    <Section title={'About me'} id="about">
      <div>
        {descriptionElement}
        <TechStack />
      </div>
    </Section>
  );
};
export default About;
