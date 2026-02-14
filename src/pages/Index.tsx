import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-5xl text-center space-y-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Sivasamy Thiyagarajan
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Full-Stack Developer | Laravel • React • Spring Boot • Fast API
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            5+ years of experience building scalable web applications,
            microservices, and high-performance systems.
            I specialize in crafting clean frontends with React/Vue and powerful
            backend architectures using Laravel & Spring Boot.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            "React",
            "Vue",
            "Laravel",
            "Spring Boot",
            "Fast API",
            "Node",
            "MySQL",
            "TypeScript",
            "Docker",
            "AWS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button asChild size="lg">
            <Link to="/projects">View Projects</Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-3 gap-6 pt-12 text-left"
        >
          <div className="p-6 rounded-2xl bg-secondary/60 backdrop-blur">
            <h3 className="font-semibold text-lg mb-2">🚀 Full Stack Apps</h3>
            <p className="text-muted-foreground text-sm">
              Built complete products handling both frontend and backend with
              clean architecture and scalable design.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/60 backdrop-blur">
            <h3 className="font-semibold text-lg mb-2">⚡ Microservices</h3>
            <p className="text-muted-foreground text-sm">
              Experienced with Laravel microservices, REST APIs, Redis caching,
              queues, and performance optimization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/60 backdrop-blur">
            <h3 className="font-semibold text-lg mb-2">💡 Problem Solver</h3>
            <p className="text-muted-foreground text-sm">
              1.5+ years freelance experience delivering client solutions,
              improving UX, and optimizing database queries.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
