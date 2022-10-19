import Image from 'next/image';
import Link from 'next/link';

const Logo = ({darkMode}) => {
  return (
    <>
      <div className="w-16 h-14 relative cursor-pointer">
        <Link href={'/'}>
          <Image
            src={`${darkMode ? '/img/Logo_light.svg' : '/img/Logo_dark.svg'}`}
            layout="fill"
            priority
            // width={50}
            // height={50}
          />
        </Link>
      </div>
    </>
  );
};
export default Logo;
