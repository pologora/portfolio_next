import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <div className="w-16 h-10 relative cursor-pointer">
        <Link href={'/'}>
          <Image src="/img/Logo_light.svg" layout="fill" priority />
        </Link>
      </div>
    </>
  );
};
export default Logo;
