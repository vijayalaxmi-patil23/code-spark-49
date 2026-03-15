import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 sm:p-16 text-center shadow-keycap"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,hsl(215_90%_55%/0.15),transparent_70%)]" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-6"
            >
              <Rocket className="h-7 w-7 text-primary" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              The compiler is cold.
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 text-lg">
              Join 2 million+ learners mastering code. Start your first lesson in 30 seconds — no credit card needed.
            </p>

            <motion.div
              whileTap={{ scale: 0.98, y: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="inline-block"
            >
              <Button variant="hero" size="xl">
                Start Learning for Free
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
