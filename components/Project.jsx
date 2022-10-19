import {IoMdClose} from 'react-icons/io';
import Link from 'next/link';
import {useState} from 'react';
import {TbWorld} from 'react-icons/tb';
import {AiOutlineGithub} from 'react-icons/ai';

const Project = ({project}) => {
  const [showDescription, setShowDescription] = useState(false);

  const {img, tech, title, github, description, web} = project;

  const toggleShowDescription = () => {
    setShowDescription((prev) => !prev);
  };

  const usedTechElement = tech.map((tech, index) => {
    return (
      <li
        className="bg-slate-500 rounded-2xl px-2 text-sm shadow-md shadow-black
        "
        key={index}
      >
        {tech}
      </li>
    );
  });

  return (
    <article
      className={`relative bg-cover bg-center h-96 rounded-xl 
       overflow-hidden sm:w-80 w-[100%]
        `}
      onClick={toggleShowDescription}
      style={{backgroundImage: `url('${img}')`}}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0
       bg-slate-900 opacity-80 flex flex-col justify-end
        transition-all duration-1000 p-8 gap-4
       rounded-xl ${showDescription ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="absolute top-2 right-2 text-2xl">
          <IoMdClose />
        </div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="">
          <p className="dark:opacity-80">{description}</p>
        </div>
        <ul className="flex gap-2">{usedTechElement}</ul>
        <div className="font-bold flex  text-xl">
          <Link href={web}>
            <a target="blank" className="hover:text-action">
              <TbWorld />
            </a>
          </Link>
          <Link href={github}>
            <a target="blank" className="ml-4 hover:text-action active:text-action">
              <AiOutlineGithub />
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};
export default Project;
