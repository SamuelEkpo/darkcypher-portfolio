
"use client";

import { useState } from "react";
import {
  skillCategories,
  skillLevelLabels,
  skillLevelCounts,
  type SkillCategory,
  type SkillLevel,
} from "../data/skills";
import styles from "./SkillsSection.module.css";

const levels: SkillLevel[] = ["hands-on", "lab", "familiar"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>(
    skillCategories[0]?.id ?? "",
  );

  const selectedCategory = skillCategories.find(
    (category: SkillCategory) => category.id === activeCategory,
  );

  if (!selectedCategory) {
    return null;
  }

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>TECHNICAL CAPABILITIES</span>

          <h2>
            Skills built through
            <span> continuous practice.</span>
          </h2>

          <p>
            A growing collection of technologies, tools, and technical
            disciplines I explore and apply through software development,
            practical work, and experimentation.
          </p>
        </div>

        <div className={styles.skillSummary}>
          <div>
            <strong>{skillLevelCounts.total}</strong>
            <span>Technical skills</span>
          </div>

          <div>
            <strong>{skillLevelCounts["hands-on"]}</strong>
            <span>Hands-on experience</span>
          </div>

          <div>
            <strong>{skillLevelCounts.lab}</strong>
            <span>Lab & practical training</span>
          </div>

          <div>
            <strong>{skillLevelCounts.familiar}</strong>
            <span>Familiarity</span>
          </div>
        </div>

        <nav
          className={styles.categoryNavigation}
          aria-label="Skill categories"
        >
          {skillCategories.map((category: SkillCategory) => (
            <button
              key={category.id}
              type="button"
              className={`${styles.categoryButton} ${
                activeCategory === category.id ? styles.activeCategory : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              <span>{category.title}</span>
              <span className={styles.categoryCount}>
                {category.skills.length}
              </span>
            </button>
          ))}
        </nav>

        <div className={styles.categoryContent}>
          <div className={styles.categoryHeading}>
            <h3>{selectedCategory.title}</h3>
            <p>{selectedCategory.description}</p>
          </div>

          {levels.map((level) => {
            const skills = selectedCategory.skills.filter(
              (skill) => skill.level === level,
            );

            if (skills.length === 0) {
              return null;
            }

            return (
              <div className={styles.skillGroup} key={level}>
                <div className={styles.skillGroupHeading}>
                  <h4>{skillLevelLabels[level]}</h4>
                  <span>{skills.length}</span>
                </div>

                <div className={styles.skillList}>
                  {skills.map((skill) => (
                    <span className={styles.skillItem} key={skill.name}>
                      <span
                        className={styles.skillIndicator}
                        data-level={skill.level}
                        aria-hidden="true"
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.disclaimer}>
          Skill classifications describe my current practical experience and
          familiarity. I continue to develop these capabilities through
          learning, experimentation, and project work.
        </p>
      </div>
    </section>
  );
}
