import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Code, FileText, HelpCircle, Play, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { coursesData } from "@/data/courses";
import { useState } from "react";

const LessonView = () => {
  const { courseId, lessonId } = useParams();
  const course = coursesData.find((c) => c.id === courseId);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Course not found</p>
      </div>
    );
  }

  // Find lesson and context
  let currentLesson = null;
  let currentModule = null;
  let prevLesson = null;
  let nextLesson = null;
  const allLessons = course.modules.flatMap((m) =>
    m.lessons.map((l) => ({ ...l, moduleTitle: m.title, moduleId: m.id }))
  );
  const lessonIndex = allLessons.findIndex((l) => l.id === lessonId);
  if (lessonIndex >= 0) {
    currentLesson = allLessons[lessonIndex];
    currentModule = course.modules.find((m) => m.id === currentLesson!.moduleId);
    prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
    nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;
  }

  if (!currentLesson || !currentModule) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">Lesson not found</p>
          <Link to={`/courses/${courseId}`} className="text-primary hover:underline">Back to course</Link>
        </div>
      </div>
    );
  }

  const typeIcon = {
    text: FileText,
    exercise: Code,
    quiz: HelpCircle,
    video: Play,
  }[currentLesson.type];
  const TypeIcon = typeIcon;

  const quizOptions = [
    "It stores a value in memory",
    "It prints output to the console",
    "It defines a function",
    "It creates a loop",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Lesson Header Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-12">
          <Link
            to={`/courses/${courseId}`}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{course.name}</span>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <TypeIcon className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium text-foreground truncate max-w-[200px]">{currentLesson.title}</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-medium text-accent tabular-nums">
            <Zap className="h-3.5 w-3.5" />
            +{currentLesson.xp} XP
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-0.5 bg-muted">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${((lessonIndex + 1) / allLessons.length) * 100}%` }}
          />
        </div>
      </div>

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Module badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary border border-border rounded-full px-3 py-1">
                <BookOpen className="h-3 w-3" />
                {currentModule.title}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold mb-6">{currentLesson.title}</h1>

            {/* Video Player */}
            {currentLesson.videoUrl && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="rounded-xl border border-border bg-card shadow-keycap-sm overflow-hidden mb-8"
              >
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={currentLesson.videoUrl}
                    title={currentLesson.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}

            {/* Lesson Content */}
            {currentLesson.content && (
              <div className="prose prose-invert max-w-none mb-8">
                {currentLesson.content.split("\n\n").map((paragraph, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {paragraph.startsWith("- ") ? (
                      <ul className="space-y-1 mb-4">
                        {paragraph.split("\n").map((item, j) => (
                          <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                        {paragraph}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Code Example */}
            {currentLesson.codeExample && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl border border-border bg-card shadow-keycap-sm overflow-hidden mb-8"
              >
                <div className="flex items-center justify-between px-4 py-2.5 bg-secondary border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-destructive/60" />
                    <span className="h-3 w-3 rounded-full bg-accent/60" />
                    <span className="h-3 w-3 rounded-full bg-success/60" />
                    <span className="ml-2 text-xs font-mono text-muted-foreground">editor</span>
                  </div>
                  <motion.div
                    whileTap={{ scale: 0.95, y: 2 }}
                  >
                    <Button variant="hero" size="sm" className="font-mono text-xs h-7 px-3">
                      <Play className="h-3 w-3" />
                      Execute
                    </Button>
                  </motion.div>
                </div>
                <pre className="p-5 overflow-x-auto">
                  <code className="text-sm font-mono leading-relaxed text-foreground">
                    {currentLesson.codeExample}
                  </code>
                </pre>
              </motion.div>
            )}

            {/* Quiz Section */}
            {currentLesson.type === "quiz" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl border border-border bg-card p-6 shadow-keycap-sm mb-8"
              >
                <h3 className="font-bold text-foreground mb-1">Knowledge Check</h3>
                <p className="text-sm text-muted-foreground mb-5">What does a variable do in programming?</p>
                <div className="space-y-2.5">
                  {quizOptions.map((option, i) => (
                    <motion.button
                      key={i}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setQuizAnswer(i)}
                      className={`w-full text-left rounded-lg border p-3.5 text-sm font-medium transition-all shadow-keycap-sm active:shadow-none active:translate-y-[2px] ${
                        quizAnswer === i
                          ? i === 0
                            ? "border-success bg-success/10 text-success"
                            : "border-destructive bg-destructive/10 text-destructive"
                          : "border-border bg-secondary text-secondary-foreground hover:border-primary/40"
                      }`}
                    >
                      <span className="mr-2 text-muted-foreground">{String.fromCharCode(65 + i)}.</span>
                      {option}
                    </motion.button>
                  ))}
                </div>
                {quizAnswer !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 rounded-lg p-3 text-sm font-medium ${
                      quizAnswer === 0
                        ? "bg-success/10 text-success border border-success/20"
                        : "bg-destructive/10 text-destructive border border-destructive/20"
                    }`}
                  >
                    {quizAnswer === 0
                      ? "✓ Correct! Variables store values in memory for later use."
                      : "✗ Syntax Error in Logic. A variable stores a value in memory. Try again!"}
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Completion CTA */}
            {!currentLesson.content && !currentLesson.codeExample && currentLesson.type !== "quiz" && (
              <div className="rounded-xl border border-border bg-card p-8 shadow-keycap-sm text-center mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <TypeIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">
                  {currentLesson.type === "exercise" ? "Coding Exercise" : "Lesson"}: {currentLesson.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This lesson content is coming soon. Stay tuned!
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
          {prevLesson ? (
            <Link to={`/courses/${courseId}/lessons/${prevLesson.id}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
            </Link>
          ) : (
            <div />
          )}

          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <Button variant="hero" size="default" className="gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Mark Complete
            </Button>
          </motion.div>

          {nextLesson ? (
            <Link to={`/courses/${courseId}/lessons/${nextLesson.id}`}>
              <Button variant="ghost" size="sm">
                Next
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          ) : (
            <Link to={`/courses/${courseId}`}>
              <Button variant="ghost" size="sm">
                Finish
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonView;
