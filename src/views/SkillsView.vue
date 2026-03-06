<template>
  <section aria-labelledby="skills-heading" class="section-shell skills-section">
    <SectionHeader
      id="skills-heading"
      eyebrow="Tech Stack"
      title="Skills e ferramentas"
      subtitle="Tecnologias com as quais desenvolvo aplicações robustas e de boa manutenção."
    />

    <div class="skills-grid">
      <article v-for="skill in skills" :key="skill.name" class="skill-card">
        <i :class="[skill.icon, 'skill-icon']" :title="skill.name" aria-hidden="true"></i>
        <h3 class="skill-name">{{ skill.name }}</h3>
        <p class="skill-label">{{ skill.label }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../components/SectionHeader.vue';

const skills = [
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored', label: 'Frontend' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', label: 'Linguagem' },
  { name: 'Laravel', icon: 'devicon-laravel-plain colored', label: 'Backend' },
  { name: '.NET', icon: 'devicon-dotnetcore-plain colored', label: 'Backend' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored', label: 'Banco de dados' },
  { name: 'C#', icon: 'devicon-csharp-plain colored', label: 'Linguagem' },
  { name: 'PHP', icon: 'devicon-php-plain colored', label: 'Linguagem' },
  { name: 'Git', icon: 'devicon-git-plain colored', label: 'Versionamento' },
  { name: 'Figma', icon: 'devicon-figma-plain colored', label: 'UX/UI' },
  { name: 'Postman', icon: 'pi pi-cog', label: 'APIs' },
];
</script>

<style scoped>
.skills-section {
  width: 100%;
  padding: clamp(1.2rem, 2.4vw, 2rem);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: clamp(0.7rem, 2vw, 1rem);
}

.skill-card {
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  background: var(--surface-panel);
  padding: 1rem 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
  border-color: rgba(58, 134, 255, 0.65);
}

.skill-icon {
  font-size: 1.9rem;
  margin-bottom: 0.55rem;
}

.skill-name {
  font-size: 1rem;
  color: var(--text-light);
}

.skill-label {
  margin-top: 0.2rem;
  color: var(--text-muted);
  font-size: 0.8rem;
}

@media (max-width: 1080px) {
  .skills-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 780px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>