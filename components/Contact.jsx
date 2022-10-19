import Section from './Section';
import socials from '../public/data/socials';

const Contact = () => {
  const socialsElement = socials.map((social, index) => {
    return (
      <div key={index}>
        {social.icon}
        {social.title}
      </div>
    );
  });
  return <Section title={'Contact'} id="contact">{socialsElement}</Section>;
};
export default Contact;
