import { motion } from 'framer-motion';

const lines = [
  "A Complete and",
  "Innovative Solutions",
  "for All Electrical Needs..."
];

const Home = () => (
  <section className="relative w-full h-screen overflow-hidden" id="home">
    {/* Background Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Dark Overlay for Readability */}
    <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 z-10"></div>

    {/* Animated Text */}
    <div className="relative z-20 flex flex-col items-center justify-center h-full space-y-4 text-center px-4">
      {lines.map((line, lineIndex) => (
        <h1
          key={lineIndex}
          className={`text-white font-bold leading-tight ${lineIndex === 1
              ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            }`}
        >
          {line.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: lineIndex * 0.5 + charIndex * 0.05,
              }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      ))}
    </div>
  </section>
);

export default Home;