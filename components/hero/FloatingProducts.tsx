import { motion } from "framer-motion";

export function FloatingProducts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 5 + item, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute hidden rounded-3xl border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur md:block"
          style={{ top: `${14 + item * 18}%`, right: `${8 + item * 3}%` }}
        >
          <div className="h-16 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-400" />
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingProducts;