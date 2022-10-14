import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className='relative w-16 h-10'>
        <Image src="/img/Logo_light.svg" layout='fill' />
      </div>
    </>
  );
};
export default Logo;
