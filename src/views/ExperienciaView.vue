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

          <section v-if="item.depoimentos?.length" class="social-proof" :aria-label="`Depoimentos sobre ${item.empresa}`">
            <h4 class="social-proof-title">Depoimentos</h4>
            <div class="social-proof-list">
              <blockquote v-for="depoimento in item.depoimentos" :key="depoimento.nome" class="testimonial-card">
                <p class="testimonial-author">{{ depoimento.nome }}</p>
                <p class="testimonial-meta">{{ depoimento.contexto }}</p>
                <p class="testimonial-date">{{ depoimento.data }}</p>
                <p class="testimonial-text">{{ depoimento.texto }}</p>
              </blockquote>
            </div>
          </section>
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
    depoimentos: [
      {
        nome: 'Charles Braga',
        data: '2 de julho de 2024',
        contexto: 'Trabalhava com Caio na mesma equipe',
        texto:
          'É uma honra recomendar Caio. Desde o começo da minha jornada na Working Software, aprendi muito com ele. Sempre disposto a ajudar, ele é uma pessoa proativa e dedicada. Sua orientação e colaboração foram cruciais para meu desenvolvimento profissional.',
      },
      {
        nome: 'Marcelo Mayrink',
        data: '10 de janeiro de 2024',
        contexto: 'Supervisionava Caio diretamente',
        texto:
          'Um excelente profissional. Muito cuidadoso e atento aos detalhes, muito ligado à equipe e sempre pronto para ajudar. Além disso, preza pela organização e pela excelência no trabalho, e sempre que pode busca aprender mais e se aperfeiçoar.',
      },
    ],
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

.social-proof {
  margin-top: 0.85rem;
  border-top: 1px solid var(--border-subtle);
  padding-top: 0.85rem;
}

.social-proof-title {
  font-size: 0.95rem;
  color: var(--accent-color);
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.social-proof-list {
  display: grid;
  gap: 0.65rem;
}

.testimonial-card {
  margin: 0;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid var(--border-subtle);
  background: rgba(255, 255, 255, 0.03);
}

.testimonial-author {
  color: var(--text-light);
  font-weight: 700;
  font-size: 0.93rem;
}

.testimonial-meta,
.testimonial-date {
  color: var(--text-muted);
  font-size: 0.8rem;
  margin-top: 0.1rem;
}

.testimonial-text {
  color: var(--text-base);
  margin-top: 0.45rem;
  font-size: 0.9rem;
  line-height: 1.45;
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