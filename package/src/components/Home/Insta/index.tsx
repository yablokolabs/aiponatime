import { section } from "framer-motion/client";
import Image from "next/image";

const Insta = () => {
  return (
    <section className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 -mb-24">
      <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* Image Container 1 */}
        <div className="relative mx-auto">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/insta/insta1.png`}
            width={306}
            height={306}
            alt="Instagram post 1"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Image Container 2 */}
        <div className="relative mx-auto">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/insta/insta2.png`}
            width={306}
            height={306}
            alt="Instagram post 2"
            className="w-full h-87 rounded-2xl"
          />
        </div>

        {/* Image Container 3 */}
        <div className="relative mx-auto">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/insta/insta3.png`}
            width={306}
            height={306}
            alt="Instagram post 3"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Image Container 4 */}
        <div className="relative mx-auto">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/insta/insta4.png`}
            width={306}
            height={306}
            alt="Instagram post 4"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Insta;
