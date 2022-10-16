import Image from 'next/image';
import Link from 'next/link';

const Logo = ({darkMode}) => {
  return (
    <>
      <div className="w-16 h-10 relative cursor-pointer">
        <Link href={'/'}>
          <Image
            src={`${darkMode ? '/img/Logo_light.svg' : '/img/Logo_dark.svg'}`}
            layout="fill"
            priority
          />
        </Link>
      </div>
    </>
  );
};
export default Logo;
