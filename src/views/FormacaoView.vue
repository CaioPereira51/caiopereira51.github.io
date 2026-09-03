<template>
  <section aria-labelledby="formacao-heading" class="section-shell formacao-section">
    <SectionHeader
      id="formacao-heading"
      eyebrow="Formação"
      title="Trajetória acadêmica e aprendizado contínuo"
      subtitle="Ciência da Computação como base; cursos complementares como registro da evolução técnica."
    />

    <div class="formation-list">
      <article v-for="item in experienciasAcademicas" :key="item.instituicao" class="formation-card">
        <div class="company-logo-side">
          <img
            :src="getLogoUrlAcademica(item.logo)"
            :alt="`Logo da instituição ${item.instituicao}`"
            class="logo-img-side"
            loading="lazy"
          />
        </div>
        <div class="formation-content">
          <h3 class="formation-title">{{ item.instituicao }}</h3>
          <p class="formation-course">{{ item.curso }}</p>
          <p class="formation-period">{{ item.periodo }}</p>
        </div>
      </article>
    </div>

    <div class="certificates-head">
      <h3 id="certificacoes-heading" class="section-title certificates-title">Formação complementar</h3>
      <p class="section-subtitle">Cursos selecionados, apresentados sem competir com a experiência profissional.</p>
    </div>

    <ul class="course-list" aria-labelledby="certificacoes-heading">
      <li v-for="certificate in certificados" :key="certificate.name">
        <div>
          <span>{{ certificate.provider }}</span>
          <h4>{{ certificate.name }}</h4>
        </div>
        <a :href="getCertificatePdfUrl(certificate.pdf)" target="_blank" rel="noopener noreferrer">
          Ver certificado
          <i class="pi pi-arrow-up-right" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import SectionHeader from '../components/SectionHeader.vue';

const getLogoUrlAcademica = (fileName) => new URL(`../assets/faculdades/${fileName}`, import.meta.url).href;
const getCertificatePdfUrl = (fileName) =>
  new URL(`../assets/certificados/${fileName}`, import.meta.url).href;

const experienciasAcademicas = [
  {
    instituicao: 'UNIFOR - Formiga',
    curso: 'Bacharelado em Ciência da Computação',
    periodo: '2019',
    logo: 'unifor.png',
  },
  {
    instituicao: 'FUMEC',
    curso: 'Bacharelado em Ciência da Computação',
    periodo: '2020 - 2025',
    logo: 'fumec.png',
  },
];

const certificados = [
  {
    pdf: 'Caio Pereira dos Santos - Curso Avançando com PHP_ Arrays, Strings, Função e Web - Alura.pdf',
    name: 'Avançando com PHP: Arrays, Strings, Funções e Web',
    provider: 'Alura',
  },
  {
    pdf: 'Caio Pereira dos Santos - Curso Bootstrap5_ crie uma landing page responsiva - Alura.pdf',
    name: 'Bootstrap 5: landing page responsiva',
    provider: 'Alura',
  },
  {
    pdf: 'Caio Pereira dos Santos - Curso Git e Github_ controle e compartilhe seu código - Alura.pdf',
    name: 'Git e GitHub: controle e compartilhamento de código',
    provider: 'Alura',
  },
  {
    pdf: 'Caio Pereira dos Santos - Curso PHP_ conceitos, lidando com dados, loops e mais - Alura.pdf',
    name: 'PHP: conceitos, dados e estruturas de controle',
    provider: 'Alura',
  },
  {
    pdf: 'Caio Pereira dos Santos - Formação em Conectar.pdf',
    name: 'Formação em Conectar',
    provider: 'Formação complementar',
  },
];
</script>

<style scoped>
.formacao-section {
  width: 100%;
  padding: clamp(1.2rem, 2.4vw, 2rem);
}

.formation-list {
  display: grid;
  gap: 1rem;
}

.formation-card {
  display: grid;
  grid-template-columns: 82px 1fr;
  gap: 1rem;
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  background: var(--surface-panel);
  padding: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.formation-card:hover {
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

.formation-content {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.formation-title {
  font-size: 1.1rem;
  color: var(--text-light);
}

.formation-course {
  color: var(--accent-color);
  font-weight: 600;
}

.formation-period {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.certificates-head {
  margin-top: 2.25rem;
  margin-bottom: 0.95rem;
}

.certificates-title {
  font-size: clamp(1.5rem, 2.8vw, 2rem);
}

.course-list {
  display: grid;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--border-subtle);
  list-style: none;
}

.course-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-subtle);
}

.course-list span {
  color: var(--accent-color);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.course-list h4 {
  margin-top: 0.18rem;
  font-size: 0.94rem;
}

.course-list a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.78rem;
  white-space: nowrap;
}

.course-list a:hover {
  color: var(--accent-color);
}

.course-list a:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

@media (max-width: 760px) {
  .formation-card {
    grid-template-columns: 1fr;
  }

  .company-logo-side {
    width: 70px;
    height: 70px;
  }

  .course-list li {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>