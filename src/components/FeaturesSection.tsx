import { motion } from "framer-motion";
import { Terminal, Brain, Trophy, BarChart3, MessageSquare, Shield } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Live Code Editor",
    description: "Write and execute Python, JavaScript, and SQL directly in your browser with instant feedback.",
  },
  {
    icon: Brain,
    title: "AI Learning Assistant",
    description: "Get personalized debugging help and code explanations powered by advanced AI.",
  },
  {
    icon: Trophy,
    title: "Gamified Progress",
    description: "Earn XP, maintain streaks, unlock badges, and compete on global leaderboards.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your learning journey with detailed weekly analytics and completion metrics.",
  },
  {
    icon: MessageSquare,
    title: "Community Forums",
    description: "Ask questions, share solutions, and learn from a community of fellow developers.",
  },
  {
    icon: Shield,
    title: "Structured Paths",
    description: "Follow curated learning paths from beginner to advanced with real-world projects.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Everything you need to{" "}
            <span className="text-gradient-accent">level up</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A complete learning machine built for real developers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card p-6 shadow-keycap-sm hover:border-primary/30 transition-colors"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 mb-4 group-hover:shadow-glow-primary transition-shadow">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
