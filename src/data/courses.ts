export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "text" | "exercise" | "quiz" | "video";
  completed: boolean;
  xp: number;
  content?: string;
  codeExample?: string;
  videoUrl?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  name: string;
  icon: string;
  color: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  longDescription: string;
  lessons: number;
  modules: Module[];
  enrolled: number;
  rating: number;
  tags: string[];
}

export const coursesData: Course[] = [
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    color: "215 90% 55%",
    level: "Beginner",
    description: "Learn Python from scratch — variables, loops, functions, and beyond.",
    longDescription: "Python is one of the most popular and versatile programming languages. This course takes you from zero to confident Python developer, covering fundamentals, data structures, OOP, and real-world projects.",
    lessons: 120,
    enrolled: 450000,
    rating: 4.8,
    tags: ["Popular", "Beginner Friendly"],
    modules: [
      {
        id: "py-intro",
        title: "Getting Started",
        description: "Your first steps into Python programming",
        lessons: [
          { id: "py-1-0", title: "Python in 10 Minutes", duration: "10 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/x7X9w_GIm1s", content: "Watch this quick overview of Python programming to understand what makes it one of the most popular languages in the world." },
          { id: "py-1-1", title: "What is Python?", duration: "5 min", type: "text", completed: false, xp: 10, content: "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular languages in the world.\n\nPython is used for:\n- Web development (Django, Flask)\n- Data Science & Machine Learning\n- Automation & Scripting\n- Game Development\n- Desktop Applications", codeExample: '# Your first Python program\nprint("Hello, World!")\n\n# Python is easy to read\nname = "Kodemy"\nprint(f"Welcome to {name}!")' },
          { id: "py-1-2", title: "Installing Python", duration: "8 min", type: "text", completed: false, xp: 10, content: "Before you start coding, you need to set up your development environment. Don't worry — we have an in-browser editor, but it's good to know how to install Python locally.\n\nPython can be downloaded from python.org. The latest version (3.12+) is recommended for new learners." },
          { id: "py-1-3", title: "Your First Program", duration: "10 min", type: "exercise", completed: false, xp: 25, content: "Let's write your very first Python program! The print() function is used to display output to the console.", codeExample: '# Try it yourself!\n# Change the message below\nprint("Hello, World!")\n\n# You can print numbers too\nprint(42)\nprint(3.14)' },
          { id: "py-1-4", title: "Knowledge Check", duration: "5 min", type: "quiz", completed: false, xp: 15 },
        ],
      },
      {
        id: "py-variables",
        title: "Variables & Data Types",
        description: "Store and manipulate data in Python",
        lessons: [
          { id: "py-2-0", title: "Python Variables Explained", duration: "15 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/cQT33yu9pY8", content: "A visual guide to understanding variables and data types in Python." },
          { id: "py-2-1", title: "Variables", duration: "8 min", type: "text", completed: false, xp: 10, content: "Variables are containers for storing data values. In Python, you don't need to declare a variable type — Python figures it out automatically.\n\nVariable naming rules:\n- Must start with a letter or underscore\n- Can contain letters, numbers, and underscores\n- Case-sensitive (age and Age are different)", codeExample: '# Creating variables\nname = "Alice"\nage = 25\nheight = 5.6\nis_student = True\n\nprint(name)\nprint(age)\nprint(type(name))  # <class \'str\'>' },
          { id: "py-2-2", title: "Strings", duration: "12 min", type: "text", completed: false, xp: 10, content: "Strings are sequences of characters enclosed in quotes. Python provides powerful string manipulation capabilities." },
          { id: "py-2-3", title: "Numbers", duration: "10 min", type: "text", completed: false, xp: 10 },
          { id: "py-2-4", title: "Type Conversion", duration: "8 min", type: "exercise", completed: false, xp: 25 },
          { id: "py-2-5", title: "Variables Quiz", duration: "5 min", type: "quiz", completed: false, xp: 15 },
        ],
      },
      {
        id: "py-control",
        title: "Control Flow",
        description: "Make decisions and repeat actions",
        lessons: [
          { id: "py-3-0", title: "Python If/Else & Loops", duration: "18 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/PqFKRqpHrjw", content: "Learn how to control the flow of your Python programs with conditionals and loops." },
          { id: "py-3-1", title: "If Statements", duration: "10 min", type: "text", completed: false, xp: 10 },
          { id: "py-3-2", title: "For Loops", duration: "12 min", type: "text", completed: false, xp: 10 },
          { id: "py-3-3", title: "While Loops", duration: "10 min", type: "text", completed: false, xp: 10 },
          { id: "py-3-4", title: "Loop Practice", duration: "15 min", type: "exercise", completed: false, xp: 30 },
          { id: "py-3-5", title: "Control Flow Quiz", duration: "5 min", type: "quiz", completed: false, xp: 15 },
        ],
      },
      {
        id: "py-functions",
        title: "Functions",
        description: "Write reusable blocks of code",
        lessons: [
          { id: "py-4-0", title: "Python Functions Tutorial", duration: "20 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/9Os0o3wzS_I", content: "Master Python functions — defining, calling, parameters, return values, and best practices." },
          { id: "py-4-1", title: "Defining Functions", duration: "10 min", type: "text", completed: false, xp: 10 },
          { id: "py-4-2", title: "Parameters & Arguments", duration: "12 min", type: "text", completed: false, xp: 10 },
          { id: "py-4-3", title: "Return Values", duration: "8 min", type: "text", completed: false, xp: 10 },
          { id: "py-4-4", title: "Build a Calculator", duration: "20 min", type: "exercise", completed: false, xp: 40 },
        ],
      },
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    color: "42 90% 55%",
    level: "Beginner",
    description: "Master the language of the web — DOM, events, async, and ES6+.",
    longDescription: "JavaScript powers the interactive web. This course covers everything from basic syntax to advanced concepts like closures, promises, and modern ES6+ features used by professional developers every day.",
    lessons: 95,
    enrolled: 380000,
    rating: 4.7,
    tags: ["Popular", "Web Dev"],
    modules: [
      {
        id: "js-intro",
        title: "JavaScript Basics",
        description: "Core concepts of JavaScript",
        lessons: [
          { id: "js-1-0", title: "JavaScript Crash Course", duration: "12 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c", content: "A fast-paced introduction to JavaScript fundamentals. Perfect for getting a visual overview before diving into the text lessons." },
          { id: "js-1-1", title: "What is JavaScript?", duration: "5 min", type: "text", completed: false, xp: 10, content: "JavaScript is the programming language of the web. Every website you visit uses JavaScript to create interactive experiences.\n\nOriginally created for browsers, JavaScript now runs everywhere — servers (Node.js), mobile apps (React Native), and even desktop apps (Electron).", codeExample: '// JavaScript in action\nconsole.log("Hello, JavaScript!");\n\nlet message = "Welcome to Kodemy";\nconsole.log(message);' },
          { id: "js-1-2", title: "Variables: let, const, var", duration: "10 min", type: "text", completed: false, xp: 10 },
          { id: "js-1-3", title: "Data Types", duration: "12 min", type: "text", completed: false, xp: 10 },
          { id: "js-1-4", title: "First Exercise", duration: "10 min", type: "exercise", completed: false, xp: 25 },
        ],
      },
      {
        id: "js-functions",
        title: "Functions & Scope",
        description: "Master functions and closures",
        lessons: [
          { id: "js-2-0", title: "JS Functions & Closures", duration: "16 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/3a0I8ICR1Vg", content: "Deep dive into JavaScript functions, scope, and closures with visual examples." },
          { id: "js-2-1", title: "Function Declarations", duration: "10 min", type: "text", completed: false, xp: 10 },
          { id: "js-2-2", title: "Arrow Functions", duration: "8 min", type: "text", completed: false, xp: 10 },
          { id: "js-2-3", title: "Closures", duration: "15 min", type: "text", completed: false, xp: 15 },
          { id: "js-2-4", title: "Functions Practice", duration: "15 min", type: "exercise", completed: false, xp: 30 },
        ],
      },
      {
        id: "js-dom",
        title: "DOM Manipulation",
        description: "Interact with web pages",
        lessons: [
          { id: "js-3-0", title: "DOM Manipulation Tutorial", duration: "20 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/y17RuWkWdn8", content: "Learn how to select, modify, and interact with HTML elements using JavaScript." },
          { id: "js-3-1", title: "Selecting Elements", duration: "10 min", type: "text", completed: false, xp: 10 },
          { id: "js-3-2", title: "Event Listeners", duration: "12 min", type: "text", completed: false, xp: 10 },
          { id: "js-3-3", title: "Build a To-Do App", duration: "25 min", type: "exercise", completed: false, xp: 50 },
        ],
      },
    ],
  },
  {
    id: "java",
    name: "Java",
    icon: "☕",
    color: "0 72% 51%",
    level: "Intermediate",
    description: "Object-oriented programming with Java — classes, inheritance, and more.",
    longDescription: "Java is the backbone of enterprise software, Android apps, and large-scale systems. This course covers OOP principles, data structures, and real-world Java development patterns.",
    lessons: 110,
    enrolled: 290000,
    rating: 4.6,
    tags: ["Enterprise", "Android"],
    modules: [
      {
        id: "java-intro",
        title: "Java Fundamentals",
        description: "Core Java syntax and concepts",
        lessons: [
          { id: "java-1-0", title: "Java for Beginners", duration: "14 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34", content: "An introductory video covering Java's core concepts and why it remains one of the most in-demand programming languages." },
          { id: "java-1-1", title: "Hello Java", duration: "8 min", type: "text", completed: false, xp: 10 },
          { id: "java-1-2", title: "Variables & Types", duration: "12 min", type: "text", completed: false, xp: 10 },
          { id: "java-1-3", title: "Control Structures", duration: "15 min", type: "text", completed: false, xp: 10 },
          { id: "java-1-4", title: "Java Basics Exercise", duration: "15 min", type: "exercise", completed: false, xp: 30 },
        ],
      },
      {
        id: "java-oop",
        title: "Object-Oriented Programming",
        description: "Classes, objects, and inheritance",
        lessons: [
          { id: "java-2-1", title: "Classes & Objects", duration: "15 min", type: "text", completed: false, xp: 15 },
          { id: "java-2-2", title: "Inheritance", duration: "15 min", type: "text", completed: false, xp: 15 },
          { id: "java-2-3", title: "Interfaces", duration: "12 min", type: "text", completed: false, xp: 15 },
          { id: "java-2-4", title: "OOP Challenge", duration: "20 min", type: "exercise", completed: false, xp: 40 },
        ],
      },
    ],
  },
  {
    id: "sql",
    name: "SQL",
    icon: "🗄️",
    color: "150 60% 45%",
    level: "Beginner",
    description: "Query databases like a pro — SELECT, JOIN, GROUP BY, and beyond.",
    longDescription: "SQL is the universal language for working with databases. Learn to query, filter, join, and aggregate data — skills used by developers, analysts, and data scientists alike.",
    lessons: 60,
    enrolled: 210000,
    rating: 4.7,
    tags: ["Data", "Essential"],
    modules: [
      {
        id: "sql-intro",
        title: "SQL Basics",
        description: "Your first queries",
        lessons: [
          { id: "sql-1-0", title: "SQL Tutorial for Beginners", duration: "11 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY", content: "Learn the basics of SQL in this beginner-friendly video tutorial covering SELECT, WHERE, and basic queries." },
          { id: "sql-1-1", title: "What is SQL?", duration: "5 min", type: "text", completed: false, xp: 10 },
          { id: "sql-1-2", title: "SELECT Statements", duration: "10 min", type: "text", completed: false, xp: 10, codeExample: "-- Select all columns\nSELECT * FROM users;\n\n-- Select specific columns\nSELECT name, email FROM users;\n\n-- Filter with WHERE\nSELECT * FROM users WHERE age > 25;" },
          { id: "sql-1-3", title: "WHERE & Filtering", duration: "12 min", type: "text", completed: false, xp: 10 },
          { id: "sql-1-4", title: "Query Practice", duration: "15 min", type: "exercise", completed: false, xp: 25 },
        ],
      },
      {
        id: "sql-joins",
        title: "Joins & Relations",
        description: "Combine data from multiple tables",
        lessons: [
          { id: "sql-2-1", title: "INNER JOIN", duration: "12 min", type: "text", completed: false, xp: 10 },
          { id: "sql-2-2", title: "LEFT & RIGHT JOIN", duration: "12 min", type: "text", completed: false, xp: 10 },
          { id: "sql-2-3", title: "JOIN Challenge", duration: "20 min", type: "exercise", completed: false, xp: 35 },
        ],
      },
    ],
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: "📊",
    color: "280 65% 55%",
    level: "Advanced",
    description: "Analyze data with Python — pandas, numpy, visualization, and statistics.",
    longDescription: "Become a data scientist by mastering Python's data ecosystem. Learn pandas, numpy, matplotlib, and statistical analysis to extract insights from real-world datasets.",
    lessons: 85,
    enrolled: 160000,
    rating: 4.5,
    tags: ["Career", "Python"],
    modules: [
      {
        id: "ds-intro",
        title: "Introduction to Data Science",
        description: "What data scientists do",
        lessons: [
          { id: "ds-1-0", title: "What is Data Science?", duration: "9 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/X3paOmcrTjQ", content: "An engaging introduction to the field of data science, covering key concepts, tools, and career paths." },
          { id: "ds-1-1", title: "Data Science Overview", duration: "8 min", type: "text", completed: false, xp: 10 },
          { id: "ds-1-2", title: "NumPy Basics", duration: "15 min", type: "text", completed: false, xp: 10 },
          { id: "ds-1-3", title: "Pandas DataFrames", duration: "18 min", type: "text", completed: false, xp: 15 },
          { id: "ds-1-4", title: "Data Analysis Exercise", duration: "20 min", type: "exercise", completed: false, xp: 35 },
        ],
      },
    ],
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: "🤖",
    color: "175 70% 45%",
    level: "Advanced",
    description: "Build intelligent systems — regression, classification, neural networks.",
    longDescription: "Dive into the world of AI and Machine Learning. Learn supervised and unsupervised learning, build models with scikit-learn, and understand the math behind the magic.",
    lessons: 70,
    enrolled: 120000,
    rating: 4.6,
    tags: ["AI", "Advanced"],
    modules: [
      {
        id: "ml-intro",
        title: "ML Foundations",
        description: "Core concepts of machine learning",
        lessons: [
          { id: "ml-1-0", title: "Machine Learning Explained", duration: "10 min", type: "video", completed: false, xp: 15, videoUrl: "https://www.youtube.com/embed/ukzFI9rgwfU", content: "A visual explanation of machine learning concepts — what it is, how it works, and why it matters." },
          { id: "ml-1-1", title: "What is Machine Learning?", duration: "10 min", type: "text", completed: false, xp: 10 },
          { id: "ml-1-2", title: "Types of ML", duration: "12 min", type: "text", completed: false, xp: 10 },
          { id: "ml-1-3", title: "Linear Regression", duration: "20 min", type: "text", completed: false, xp: 15 },
          { id: "ml-1-4", title: "Build a Predictor", duration: "25 min", type: "exercise", completed: false, xp: 40 },
        ],
      },
    ],
  },
];
