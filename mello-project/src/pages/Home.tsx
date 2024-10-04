import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="home flex px-12 md:px-16 lg:px-24 xl:px-36 2xl:px-44 h-full w-full overflow-y-hidden"
      initial={{ opacity: 0 }} // Elements start invisible
      animate={{ opacity: 1 }} // Fade them in
      transition={{ duration: 0.5, delay: 0.2 }} // Add delays for smoothness
    >
      <div className="flex flex-col justify-center font-bold font-sofia text-[var(--text-color)]">
        <motion.div
          className="text-start text-6xl sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[12rem] -tracking-[.1em] font-sofia font-semibold"
          initial={{ y: 100 , opacity: 0}} // Slide from right
          animate={{ y: 0 , opacity: 1}} // Slide to position
          transition={{ duration: 1.5 }}
        >
          'ello
        </motion.div>
        <motion.div
          className="text-start w-full flex-column justify-center content-start mr-4 text-sm sm:text-xl font-sofia font-semibold"
          initial={{ y: 100 , opacity: 0}} // Slide from right
          animate={{ y: 0 , opacity: 1}} // Slide to position
          transition={{ duration: 1, delay: 0.75 }}
        >
          Welcome to the repository of my work, creations, and thoughts
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
