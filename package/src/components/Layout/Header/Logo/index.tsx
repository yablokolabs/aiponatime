import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="relative block bg-transparent p-1.5 -m-1.5">
      <div className="relative overflow-hidden">
        <Image 
          src="/images/Logo-pica.png" 
          alt="AIponaTime" 
          width={36}
          height={14}
          className="h-14 w-auto object-contain transition-transform duration-300 md:h-16 lg:h-20 hover:scale-105"
          style={{
            WebkitMask: 'linear-gradient(to right, black, black)',
            mask: 'linear-gradient(to right, black, black)',
            minWidth: '140px',
          }}
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
