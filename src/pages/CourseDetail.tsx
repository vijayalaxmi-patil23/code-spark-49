import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, CheckCircle2, Circle, Code, FileText, HelpCircle, Lock, Play, Star, Trophy, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { coursesData } from "@/data/courses";

const typeIcons = {
  text: FileText,
  exercise: Code,
  quiz: HelpCircle,
  video: Play,
};

const typeLabels = {
  text: "Lesson",
  exercise: "Exercise",
  quiz: "Quiz",
  video: "Video",
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Course not found</h1>
          <Link to="/courses" className="text-primary hover:underline">Back to courses</Link>
        </div>
      </div>
    );
  }

  const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (sum, m) => sum + m.lessons.filter((l) => l.completed).length,
    0
  );
  const totalXp = course.modules.reduce(
    (sum, m) => sum + m.lessons.reduce((s, l) => s + l.xp, 0),
    0
  );
  const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-16">
        {/* Course Header */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                All Courses
              </Link>

              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{course.icon}</span>
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-extrabold">{course.name}</h1>
                      <span className="text-sm font-medium text-muted-foreground">{course.level}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
                    {course.longDescription}
                  </p>
                  <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4" />
                      {totalLessons} lessons
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      {(course.enrolled / 1000).toFixed(0)}k enrolled
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-accent" />
                      {course.rating} rating
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Zap className="h-4 w-4 text-accent" />
                      {totalXp} XP total
                    </span>
                  </div>
                </div>

                {/* Progress Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="w-full lg:w-72 rounded-xl border border-border bg-card p-5 shadow-keycap-sm shrink-0"
                >
                  <h3 className="text-sm font-semibold text-foreground mb-3">Your Progress</h3>
                  <div className="relative h-2 rounded-full bg-muted mb-2 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    {completedLessons}/{totalLessons} lessons completed
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Trophy className="h-3.5 w-3.5 text-accent" />
                      <span className="tabular-nums font-semibold text-foreground">0</span> XP earned
                    </div>
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    {completedLessons > 0 ? "Continue Learning" : "Start Course"}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Modules */}
        <div className="container mx-auto px-4 lg:px-8 py-10">
          <h2 className="text-xl font-bold mb-6">Course Modules</h2>
          <div className="space-y-5">
            {course.modules.map((module, mi) => {
              const moduleLessonsCompleted = module.lessons.filter((l) => l.completed).length;
              const moduleProgress = (moduleLessonsCompleted / module.lessons.length) * 100;

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + mi * 0.08 }}
                  className="rounded-xl border border-border bg-card shadow-keycap-sm overflow-hidden"
                >
                  {/* Module Header */}
                  <div className="flex items-center justify-between p-5 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-primary-foreground"
                        style={{ background: `hsl(${course.color})` }}
                      >
                        {mi + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{module.title}</h3>
                        <p className="text-xs text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">
                        {moduleLessonsCompleted}/{module.lessons.length}
                      </span>
                      <div className="w-20 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${moduleProgress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Lessons List */}
                  <div className="divide-y divide-border">
                    {module.lessons.map((lesson, li) => {
                      const Icon = typeIcons[lesson.type];
                      const isLocked = mi > 0 && li === 0 && !course.modules[mi - 1].lessons.every(l => l.completed);

                      return (
                        <Link
                          key={lesson.id}
                          to={isLocked ? "#" : `/courses/${course.id}/lessons/${lesson.id}`}
                          className={`group flex items-center justify-between px-5 py-3.5 hover:bg-secondary/50 transition-colors ${isLocked ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          <div className="flex items-center gap-3">
                            {lesson.completed ? (
                              <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                            ) : isLocked ? (
                              <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground/40 shrink-0" />
                            )}
                            <div>
                              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {lesson.title}
                              </p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                                  <Icon className="h-3 w-3" />
                                  {typeLabels[lesson.type]}
                                </span>
                                <span className="text-[11px] text-muted-foreground">·</span>
                                <span className="text-[11px] text-muted-foreground">{lesson.duration}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-xs font-medium text-accent tabular-nums">
                            <Zap className="h-3 w-3" />
                            +{lesson.xp} XP
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
