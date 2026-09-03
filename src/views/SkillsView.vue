<template>
  <section aria-labelledby="skills-heading" class="section-shell skills-section">
    <SectionHeader
      id="skills-heading"
      eyebrow="Competências técnicas"
      title="Profundidade antes de quantidade"
      subtitle="Tecnologias organizadas pelo papel que ocupam na minha atuação e nos projetos que construo."
    />

    <div class="skill-groups">
      <article v-for="group in skillGroups" :key="group.title" class="skill-group">
        <header>
          <p class="group-number">{{ group.number }}</p>
          <div>
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
          </div>
        </header>
        <ul class="skill-list">
          <li v-for="skill in group.skills" :key="skill.name">
            <i :class="skill.icon" aria-hidden="true"></i>
            <span>{{ skill.name }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../components/SectionHeader.vue';

const skillGroups = [
  {
    number: '01',
    title: 'Stack principal',
    description: 'Base da minha atuação Full Stack.',
    skills: [
      { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
      { name: '.NET / C#', icon: 'devicon-dotnetcore-plain colored' },
      { name: 'PHP', icon: 'devicon-php-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    ],
  },
  {
    number: '02',
    title: 'Engenharia e entrega',
    description: 'Práticas que sustentam aplicações além da interface.',
    skills: [
      { name: 'APIs REST', icon: 'pi pi-server' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored' },
      { name: 'Testes', icon: 'pi pi-check-circle' },
      { name: 'Postman', icon: 'pi pi-send' },
    ],
  },
  {
    number: '03',
    title: 'Exploração aplicada',
    description: 'Tecnologias usadas em produtos autorais.',
    skills: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Rust', icon: 'devicon-rust-plain' },
      { name: 'Tauri', icon: 'pi pi-desktop' },
      { name: 'Figma', icon: 'devicon-figma-plain colored' },
    ],
  },
];
</script>

<style scoped>
.skills-section {
  width: 100%;
  padding: clamp(1.2rem, 2.4vw, 2rem);
}

.skill-groups {
  display: grid;
  gap: 0;
  border-top: 1px solid var(--border-subtle);
}

.skill-group {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) 1.28fr;
  gap: clamp(1.5rem, 5vw, 5rem);
  align-items: center;
  padding: clamp(1.5rem, 4vw, 2.6rem) 0;
  border-bottom: 1px solid var(--border-subtle);
}

.skill-group header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
}

.group-number {
  color: var(--accent-color);
  font-family: var(--font-mono);
  font-size: 0.7rem;
}

.skill-group h3 {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.5vw, 2rem);
  letter-spacing: -0.03em;
}

.skill-group header div p {
  margin-top: 0.2rem;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-list li {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 40px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--text-light);
  font-size: 0.82rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.skill-list li:hover {
  transform: translateY(-2px);
  border-color: var(--accent-color);
}

.skill-list i {
  font-size: 1rem;
}

@media (max-width: 780px) {
  .skill-group {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
}
</style>