import Image from 'next/image';
import {techStack} from '../public/data/about';

const TechStack = () => {
  const iconsElement = techStack.map((element, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center
      w-24"
      >
        <div>
          <Image
            src={element.icon}
            width="40"
            height="40"
            className="bg-slate-50 rounded-full"
          />
        </div>
        <span className='dark:opacity-60'>{element.title}</span>
      </div>
    );
  });
  return (
    <div>
      <h3 className='text-xl my-20 text-center'>Technologies i use: </h3>
      <div className="flex gap-6 flex-wrap justify-center">{iconsElement}</div>
    </div>
  );
};
export default TechStack;
