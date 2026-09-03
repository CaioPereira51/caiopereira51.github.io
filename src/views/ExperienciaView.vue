<template>
  <section aria-labelledby="experiencia-heading" class="section-shell experiencia-section">
    <SectionHeader
      id="experiencia-heading"
      eyebrow="Experiência"
      title="Experiência construída em sistemas reais"
      subtitle="Atuação profissional contínua desde 2022, evoluindo aplicações com atenção à qualidade e à confiabilidade."
    />

    <div class="experience-list">
      <article v-for="item in experiencias" :key="item.empresa" class="experience-card">
        <div class="experience-meta">
          <div class="company-logo-side">
            <img :src="getLogoUrl(item.logo)" :alt="`Logo da empresa ${item.empresa}`" class="logo-img-side" loading="lazy" />
          </div>
          <p class="company-period">{{ item.periodo }}</p>
        </div>

        <div class="experience-content">
          <h3 class="company-name">{{ item.empresa }}</h3>
          <p class="company-role">{{ item.cargo }}</p>
          <ul class="responsibility-list">
            <li v-for="responsibility in item.responsabilidades" :key="responsibility">
              {{ responsibility }}
            </li>
          </ul>

          <section v-if="item.depoimentos?.length" class="social-proof" :aria-label="`Depoimentos sobre ${item.empresa}`">
            <h4 class="social-proof-title">Recomendações de quem trabalhou comigo</h4>
            <div class="social-proof-list">
              <blockquote v-for="depoimento in item.depoimentos" :key="depoimento.nome" class="testimonial-card">
                <p class="testimonial-text">“{{ depoimento.texto }}”</p>
                <footer>
                  <p class="testimonial-author">{{ depoimento.nome }}</p>
                  <p class="testimonial-meta">{{ depoimento.contexto }}</p>
                </footer>
              </blockquote>
            </div>
            <a
              href="https://www.linkedin.com/in/caiopereira51/"
              target="_blank"
              rel="noopener noreferrer"
              class="recommendation-link"
            >
              Ver perfil no LinkedIn
              <i class="pi pi-arrow-up-right" aria-hidden="true"></i>
            </a>
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
    cargo: 'Desenvolvedor Full Stack',
    periodo: 'Julho de 2022 — atualmente',
    logo: 'ws.png',
    responsabilidades: [
      'Análise e desenvolvimento de sistemas em contexto profissional.',
      'Manutenção corretiva e evolução contínua de aplicações existentes.',
      'Aprimoramento de soluções com foco em desempenho, confiabilidade e organização.',
      'Colaboração próxima com a equipe, apoiando entregas e o desenvolvimento de outros profissionais.',
    ],
    depoimentos: [
      {
        nome: 'Charles Braga',
        contexto: 'Trabalhou comigo na mesma equipe',
        texto:
          'Sempre disposto a ajudar, ele é uma pessoa proativa e dedicada. Sua orientação e colaboração foram cruciais para meu desenvolvimento profissional.',
      },
      {
        nome: 'Marcelo Mayrink',
        contexto: 'Supervisionou meu trabalho diretamente',
        texto:
          'Muito cuidadoso e atento aos detalhes, muito ligado à equipe e sempre pronto para ajudar. Preza pela organização e pela excelência no trabalho.',
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
  grid-template-columns: minmax(180px, 0.32fr) 1fr;
  gap: clamp(1.5rem, 5vw, 5rem);
  padding: clamp(1.2rem, 3vw, 2.4rem) 0;
  border-block: 1px solid var(--border-subtle);
}

.company-logo-side {
  width: 82px;
  height: 82px;
  border-radius: 4px;
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
  gap: 0.5rem;
}

.company-name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.4rem);
  letter-spacing: -0.04em;
}

.company-role {
  font-weight: 600;
  color: var(--accent-color);
}

.responsibility-list {
  display: grid;
  gap: 0.65rem;
  margin: 1.2rem 0 0;
  padding: 0;
  list-style: none;
}

.responsibility-list li {
  position: relative;
  padding-left: 1.25rem;
  color: var(--text-base);
}

.responsibility-list li::before {
  content: '↳';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-family: var(--font-mono);
}

.company-period {
  margin-top: 0.65rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

.social-proof {
  margin-top: 0.85rem;
  border-top: 1px solid var(--border-subtle);
  padding-top: 0.85rem;
}

.social-proof-title {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-light);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
}

.social-proof-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
}

.testimonial-card {
  margin: 0;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid var(--border-subtle);
  background: rgba(255, 255, 255, 0.025);
}

.testimonial-card footer {
  margin-top: 0.9rem;
}

.testimonial-author {
  color: var(--text-light);
  font-weight: 700;
  font-size: 0.93rem;
}

.testimonial-meta {
  color: var(--text-muted);
  font-size: 0.8rem;
  margin-top: 0.1rem;
}

.testimonial-text {
  color: var(--text-base);
  font-size: 0.9rem;
  line-height: 1.45;
}

.recommendation-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.9rem;
  color: var(--accent-color);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
}

.recommendation-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

@media (max-width: 760px) {
  .experience-card {
    grid-template-columns: 1fr;
  }

  .experience-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .company-period {
    margin: 0;
  }

  .social-proof-list {
    grid-template-columns: 1fr;
  }

  .company-logo-side {
    width: 70px;
    height: 70px;
  }
}
</style>