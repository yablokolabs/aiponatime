import Image from 'next/image';
import { motion } from 'framer-motion';
import { ColorfulSection } from '@/components/Common/ColorfulSection';
import { ColorfulButton } from '@/components/Common/ColorfulButton';

const features = [
  {
    icon: '✨',
    title: 'Magical Stories',
    description: 'Create enchanting stories that captivate children\'s imagination and inspire a love for reading.'
  },
  {
    icon: '🎨',
    title: 'Vibrant Illustrations',
    description: 'Beautiful, colorful illustrations that bring each story to life with vivid details.'
  },
  {
    icon: '🚀',
    title: 'AI-Powered',
    description: 'Our advanced AI crafts unique, personalized stories tailored to each child\'s interests.'
  },
  {
    icon: '📚',
    title: 'Educational Value',
    description: 'Stories designed to educate while entertaining, helping children learn as they read.'
  },
];

export const AboutUs = () => {
  return (
    <ColorfulSection 
      id="about"
      title="Our Magical Storytelling"
      subtitle="Why Choose Us"
      gradientFrom="from-blue-50"
      gradientTo="to-purple-50"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about-illustration.jpg"
              alt="Children reading books"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Inspiring Young Minds</h3>
              <p className="text-blue-100">Creating stories that spark imagination and joy</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Crafting Magical Reading Experiences</h3>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            At AiPonATime, we believe every child deserves to be the hero of their own story. 
            Our AI-powered platform creates personalized storybooks that make reading an 
            exciting adventure for children of all ages.
          </p>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            With vibrant illustrations and engaging narratives, we help foster a love for 
            reading that lasts a lifetime. Our stories are not just entertaining - they're 
            educational tools that help children develop language skills and creativity.
          </p>
          <div className="flex flex-wrap gap-4">
            <ColorfulButton>
              Explore Stories
            </ColorfulButton>
            <ColorfulButton 
              gradientFrom="from-gray-600" 
              gradientTo="to-gray-400"
              className="bg-gray-700"
            >
              Learn More
            </ColorfulButton>
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </ColorfulSection>
  );
};

export default AboutUs;
