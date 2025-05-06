import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-20 gap-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Text content */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mohammad Nusairat
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Data Scientist | Software Engineer | AI Research Fellow. I build intelligent systems and
          full-stack applications with clean, scalable code.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
        >
          View My Resume
        </a>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/bannerMN.JPEG"
          alt="Mohammad Nusairat working at laptop"
          className="rounded-lg shadow-lg max-h-[400px] object-cover"
          loading="lazy"
        />
      </div>
    </motion.section>
  );
}
