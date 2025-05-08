import { FaUpload, FaCalculator, FaMoneyCheckAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaUpload size={30} className="text-blue-600" />,
    title: 'Upload License',
    description: 'Send us details of your unused software licenses securely.',
  },
  {
    icon: <FaCalculator size={30} className="text-blue-600" />,
    title: 'Get Valuation',
    description: 'We evaluate your license and offer a competitive quote.',
  },
  {
    icon: <FaMoneyCheckAlt size={30} className="text-blue-600" />,
    title: 'Get Paid',
    description: 'Once accepted, we transfer the payment quickly.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 50 }} // Initial position (invisible and 50px below)
            animate={{ opacity: 1, y: 0 }}   // Final position (fully visible and in normal position)
            transition={{ duration: 0.8, delay: index * 0.2 }} // Delay based on index for staggered effect
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
