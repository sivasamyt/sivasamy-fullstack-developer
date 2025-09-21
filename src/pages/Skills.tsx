import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import PageTransition from '@/components/PageTransition';
import { Code, Database, Palette, Brain, Globe, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-[hsl(var(--cyber-blue))]",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Framer Motion", level: 88 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-[hsl(var(--cyber-purple))]",
      skills: [
        { name: "Java / Spring Boot", level: 85 },
        { name: "PHP / Laravel", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "text-[hsl(var(--cyber-pink))]",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Animation & Motion", level: 90 }
      ]
    },
    // {
    //   title: "AI & Machine Learning",
    //   icon: Brain,
    //   color: "text-[hsl(var(--cyber-green))]",
    //   skills: [
    //     { name: "TensorFlow / PyTorch", level: 75 },
    //     { name: "Computer Vision", level: 70 },
    //     { name: "NLP & LLMs", level: 80 },
    //     { name: "Data Science", level: 78 }
    //   ]
    // },
    {
      title: "DevOps & Cloud",
      icon: Globe,
      color: "text-[hsl(var(--cyber-blue))]",
      skills: [
        { name: "AWS / Azure", level: 85 },
        { name: "Docker", level: 80 },
        { name: "CI/CD Pipelines", level: 88 },
        // { name: "Monitoring & Logging", level: 82 }
      ]
    },
    // {
    //   title: "Security & Blockchain",
    //   icon: Shield,
    //   color: "text-[hsl(var(--cyber-purple))]",
    //   skills: [
    //     { name: "Web Security", level: 85 },
    //     { name: "Solidity / Smart Contracts", level: 75 },
    //     { name: "Cryptography", level: 70 },
    //     { name: "Security Audits", level: 80 }
    //   ]
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageTransition className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-cyber">
            Technical Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="glass border-glow hover:shadow-glow transition-all duration-500 h-full">
                <CardHeader className="text-center">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-4"
                  >
                    <category.icon className={`w-12 h-12 ${category.color}`} />
                  </motion.div>
                  <CardTitle className="text-xl text-cyber">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={0}
                          className="h-2 bg-secondary"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="absolute top-0 left-0 h-2 bg-gradient-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Certifications Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-cyber">
            Certifications & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "AWS Certified Solutions Architect",
              "Google Cloud Professional",
              "MongoDB Certified Developer",
              "Kubernetes Administrator"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl text-center hover-lift"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cert}</h3>
                <p className="text-sm text-muted-foreground">2023 - 2024</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </PageTransition>
  );
};

export default Skills;