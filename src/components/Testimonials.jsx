import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Manager',
    company: 'TechNova',
    quote: 'SoftSell helped us recover value from unused licenses quickly and easily. Highly recommended!',
  },
  {
    name: 'Mark Stevens',
    role: 'Procurement Lead',
    company: 'BizCore Ltd.',
    quote: 'Professional and fast service — we turned unused software into real savings.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12">Customer Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-lg shadow"
            initial={{ opacity: 0, y: 50 }} // Start from below and hidden
            animate={{ opacity: 1, y: 0 }}   // Animate to normal position
            transition={{ duration: 0.8, delay: i * 0.2 }} // Staggered delay for each card
          >
            <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

  