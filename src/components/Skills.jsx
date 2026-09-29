import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">

        {/* Skills Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-300 mb-12">
          Technologies I work with to bring ideas to life
        </p>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-dark-300 rounded-2xl p-6 cursor-pointer transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-5 mb-5">
                  <Icon className="text-purple text-5xl flex-shrink-0" />

                  <h3 className="text-xl font-bold text-white leading-tight">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-5">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-2 bg-dark-200 text-gray-200 rounded-full text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;