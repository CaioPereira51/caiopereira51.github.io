<template>
  <section aria-labelledby="experiencia-heading" class="section-shell experiencia-section">
    <SectionHeader
      id="experiencia-heading"
      eyebrow="Carreira"
      title="Experiência profissional"
      subtitle="Atuação prática com análise e desenvolvimento de sistemas focada em entrega contínua."
    />

    <div class="experience-list">
      <article v-for="item in experiencias" :key="item.empresa" class="experience-card">
        <div class="company-logo-side">
          <img :src="getLogoUrl(item.logo)" :alt="`Logo da empresa ${item.empresa}`" class="logo-img-side" loading="lazy" />
        </div>

        <div class="experience-content">
          <h3 class="company-name">{{ item.empresa }}</h3>
          <p class="company-role">{{ item.cargo }}</p>
          <p class="company-description">{{ item.descricao }}</p>
          <p class="company-period">{{ item.periodo }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../components/SectionHeader.vue';

const getLogoUrl = (fileName) => new URL(`../assets/empresas/${fileName}`, import.meta.url).href;

const experiencias = [
  {
    empresa: 'WorkingSoftware',
    cargo: 'Desenvolvedor FullStack',
    descricao:
      'Análise e desenvolvimento de sistemas, manutenção de aplicações e evolução de soluções voltadas a desempenho e confiabilidade.',
    periodo: 'Julho de 2022 - Atualmente',
    logo: 'ws.png',
  },
];
</script>

<style scoped>
.experiencia-section {
  width: 100%;
  padding: clamp(1.2rem, 2.4vw, 2rem);
}

.experience-list {
  display: grid;
  gap: 1rem;
}

.experience-card {
  display: grid;
  grid-template-columns: 82px 1fr;
  gap: 1rem;
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  background: var(--surface-panel);
  padding: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.experience-card:hover {
  transform: translateY(-2px);
  border-color: rgba(58, 134, 255, 0.62);
}

.company-logo-side {
  width: 82px;
  height: 82px;
  border-radius: 10px;
  border: 1px solid var(--border-subtle);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem;
}

.logo-img-side {
  width: 100%;
  height: auto;
  max-height: 56px;
  object-fit: contain;
}

.experience-content {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.company-name {
  font-size: 1.15rem;
  color: var(--text-light);
}

.company-role {
  font-weight: 600;
  color: var(--accent-color);
}

.company-description {
  color: var(--text-base);
}

.company-period {
  margin-top: 0.35rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 760px) {
  .experience-card {
    grid-template-columns: 1fr;
  }

  .company-logo-side {
    width: 70px;
    height: 70px;
  }
}
</style>