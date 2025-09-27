import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="relative block p-1.5 -m-1.5 group h-14 md:h-16 lg:h-20">
      <div className="relative h-full w-auto overflow-visible">
        <div className="absolute inset-0 bg-transparent group-hover:bg-white/20 rounded-lg transition-colors duration-300">
        </div>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Logo-pica.png`}
          alt="AIponaTime"
          width={36}
          height={14}
          className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300 ease-in-out group-hover:scale-y-[3.5] group-hover:scale-x-[3.5] origin-top relative z-10"
          style={{
            WebkitMask: "linear-gradient(to right, black, black)",
            mask: "linear-gradient(to right, black, black)",
            minWidth: "140px",
          }}
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
