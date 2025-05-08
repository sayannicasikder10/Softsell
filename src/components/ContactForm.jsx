import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
      <motion.form
        className="max-w-2xl mx-auto grid gap-6 text-left"
        initial={{ opacity: 0, y: 50 }} // Start from below and hidden
        animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and normal position
        transition={{ duration: 0.8 }}    // Smooth transition
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Company</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">License Type</label>
          <select className="w-full border p-2 rounded" required>
            <option value="">Select type</option>
            <option>Windows</option>
            <option>Office Suite</option>
            <option>Adobe</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea rows="4" className="w-full border p-2 rounded"></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
