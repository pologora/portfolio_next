import {IoMdClose} from 'react-icons/io';
import Link from 'next/link';
import {useState} from 'react';

const Project = ({project}) => {
  const [showDescription, setShowDescription] = useState(true);

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
      className={`relative bg-contain bg-no-repeat h-96 rounded-xl shadow-md
       shadow-white overflow-hidden cursor-pointer sm:w-80 w-[100%]
        `}
      onClick={toggleShowDescription}
      style={{backgroundImage: `url('${img}')`}}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0
       bg-slate-900 opacity-80 flex flex-col justify-between
        transition-all duration-1000
       rounded-xl ${showDescription ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="absolute top-2 right-2">
          <IoMdClose />
        </div>
        <div className="pt-10 p-2">
          <h3 className="text-center">{title}</h3>
          <p className="pt-4 text-left">{description}</p>
        </div>
        <div className="text-center text-action font-bold mt-4">
          <Link href={web}>
            <a target="blank" className="btn">
              Visit website
            </a>
          </Link>
          <Link href={github}>
            <a target="blank" className="btn ml-4">
              Source code
            </a>
          </Link>
        </div>
        <ul className="flex gap-2 justify-center mb-4">{usedTechElement}</ul>
      </div>
    </article>
  );
};
export default Project;
