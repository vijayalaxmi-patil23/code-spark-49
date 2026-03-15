import { motion } from "framer-motion";
import { Play, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-code.png";

const stats = [
  { icon: Users, value: "2M+", label: "Learners" },
  { icon: Zap, value: "50+", label: "Courses" },
  { icon: Play, value: "1000+", label: "Exercises" },
];

const springConfig = { type: "spring" as const, stiffness: 300, damping: 30 };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">
                New: Machine Learning Course
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Master the machine,{" "}
              <span className="text-gradient-primary">one line</span>{" "}
              at a time.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Interactive lessons, real code execution, and AI-powered guidance.
              Learn Python, JavaScript, SQL and more — for free.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.div whileTap={{ scale: 0.98, y: 3 }} transition={springConfig}>
                <Button variant="hero" size="xl">
                  <Play className="h-5 w-5 mr-1" />
                  Start Learning
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.98, y: 2 }} transition={springConfig}>
                <Button variant="outline" size="xl">
                  Explore Courses
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary border border-border">
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold tabular-nums text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-xl border border-border overflow-hidden shadow-keycap">
              {/* Editor top bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-accent/60" />
                <span className="h-3 w-3 rounded-full bg-success/60" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">main.py</span>
              </div>
              <img
                src={heroImage}
                alt="Interactive code editor"
                className="w-full"
              />
              {/* Run button overlay */}
              <motion.div
                className="absolute bottom-4 right-4"
                animate={{ boxShadow: ["0px 0px 8px hsl(215 90% 55% / 0.3)", "0px 0px 20px hsl(215 90% 55% / 0.6)", "0px 0px 8px hsl(215 90% 55% / 0.3)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Button variant="hero" size="sm" className="font-mono">
                  <Play className="h-3.5 w-3.5" />
                  Execute
                </Button>
              </motion.div>
            </div>

            {/* Floating XP badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 shadow-keycap-sm"
            >
              <Zap className="h-4 w-4 text-accent-foreground" />
              <span className="text-sm font-bold text-accent-foreground tabular-nums">+50 XP</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
