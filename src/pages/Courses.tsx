import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Star, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { coursesData } from "@/data/courses";

const levelColors: Record<string, string> = {
  Beginner: "text-success",
  Intermediate: "text-accent",
  Advanced: "text-destructive",
};

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
              All <span className="text-gradient-primary">Courses</span>
            </h1>
            <p className="text-muted-foreground max-w-lg">
              From first variable to production-ready code. Pick a language and start building.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {["All", "Beginner", "Intermediate", "Advanced"].map((filter) => (
              <button
                key={filter}
                className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-keycap-sm active:shadow-none active:translate-y-[2px] first:bg-primary first:text-primary-foreground first:border-primary"
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Course Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coursesData.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link to={`/courses/${course.id}`} className="group block">
                  <div className="relative rounded-xl border border-border bg-card p-6 shadow-keycap-sm hover:border-primary/40 transition-all h-full">
                    {/* Top accent */}
                    <div
                      className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `hsl(${course.color})` }}
                    />

                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{course.icon}</span>
                      <span className={`text-[10px] font-semibold uppercase tracking-wider ${levelColors[course.level]} bg-secondary px-2.5 py-1 rounded`}>
                        {course.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1.5 text-foreground">{course.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{course.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {course.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3.5 w-3.5" />
                          {course.lessons} lessons
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          {(course.enrolled / 1000).toFixed(0)}k
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 text-accent" />
                          {course.rating}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
