import Image from 'next/image';
import loader from '@/assets/images/loader.gif';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Image src={loader} alt='Loading...' height={150} width={150}></Image>
    </div>
  );
};

export default Loading;
