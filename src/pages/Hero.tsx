import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThreeScene from "@/components/ThreeScene";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <PageTransition className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 gradient-blur" />
      <ThreeScene className="absolute inset-0 opacity-30" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-cyber">Sivasamy</span>
              <br />
              <span className="text-muted-foreground text-3xl lg:text-4xl font-medium">
                Full-Stack Developer
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              I design and build scalable web applications using{" "}
              <span className="text-foreground font-semibold">Laravel</span>,{" "}
              <span className="text-foreground font-semibold">React</span>,{" "}
              <span className="text-foreground font-semibold">Fast API</span> and{" "}
              <span className="text-foreground font-semibold">Spring Boot</span>.
              Passionate about clean architecture, performance optimization and
              solving real business problems with code.
            </p>

            <div className="flex flex-wrap gap-8 pt-4 justify-center lg:justify-start">
              <div>
                <h3 className="text-3xl font-bold text-cyber">5+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyber">10+</h3>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyber">4</h3>
                <p className="text-sm text-muted-foreground">Companies Worked</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <Link to="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all hover:scale-105"
                >
                  View My Work
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass border-glow hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glass p-10 rounded-3xl hover-lift backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-cyber">
              About Me
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">

              <p>
                🚀 Experienced Full-Stack Developer building enterprise-grade
                applications with microservices, REST APIs and modern UI systems.
              </p>

              <p>
                ⚙️ Worked on Laravel microservices, Redis caching, queues,
                payment gateways, and real-time notification systems.
              </p>

              <p>
                💼 Delivered solutions for startups and international clients
                including eCommerce, Workflow Systems, Crypto Payments,
                and Parking Management platforms.
              </p>

              <p>
                🎯 Focused on writing clean, maintainable, and scalable code that
                improves performance and user experience.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Vue",
                  "Laravel",
                  "Spring Boot",
                  "Fast API",
                  "TypeScript",
                  "Node.js",
                  "MySQL",
                  "Docker",
                  "AWS",
                  "Redis",
                ].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Hero;
