import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const courses = [
  { name: "Python", icon: "🐍", lessons: 120, color: "215 90% 55%", level: "Beginner" },
  { name: "JavaScript", icon: "⚡", lessons: 95, color: "42 90% 55%", level: "Beginner" },
  { name: "Java", icon: "☕", lessons: 110, color: "0 72% 51%", level: "Intermediate" },
  { name: "SQL", icon: "🗄️", lessons: 60, color: "150 60% 45%", level: "Beginner" },
  { name: "Data Science", icon: "📊", lessons: 85, color: "280 65% 55%", level: "Advanced" },
  { name: "Machine Learning", icon: "🤖", lessons: 70, color: "175 70% 45%", level: "Advanced" },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 mb-4">
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Learning Paths</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Choose your <span className="text-gradient-primary">language</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            From first variable to production code. Each path is designed for real-world mastery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-xl border border-border bg-card p-6 shadow-keycap-sm hover:border-primary/40 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{course.icon}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {course.level}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">{course.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.lessons} lessons</p>
              <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Start Learning
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
              {/* Top accent line */}
              <div
                className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `hsl(${course.color})` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
