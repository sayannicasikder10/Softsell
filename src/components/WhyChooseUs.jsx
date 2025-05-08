import { FaShieldAlt, FaClock, FaHandshake, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaShieldAlt size={24} className="text-blue-600" />,
    title: 'Secure & Legal',
    description: 'We ensure all transfers are fully compliant and secure.',
  },
  {
    icon: <FaClock size={24} className="text-blue-600" />,
    title: 'Fast Payouts',
    description: 'We process transactions quickly so you get paid faster.',
  },
  {
    icon: <FaHandshake size={24} className="text-blue-600" />,
    title: 'Trusted Partner',
    description: 'Join hundreds of clients who trust SoftSell.',
  },
  {
    icon: <FaStar size={24} className="text-blue-600" />,
    title: 'Great Valuations',
    description: 'Get competitive offers for your unused licenses.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 50 }} // Start from below, hidden
            animate={{ opacity: 1, y: 0 }}   // Animate to normal position
            transition={{ duration: 0.8, delay: i * 0.2 }} // Delay for staggered effect
          >
            <div className="mb-3 flex justify-center">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
