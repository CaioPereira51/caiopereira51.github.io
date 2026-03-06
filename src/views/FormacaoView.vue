<template>
  <section aria-labelledby="formacao-heading" class="section-shell formacao-section">
    <SectionHeader
      id="formacao-heading"
      eyebrow="Formação"
      title="Formação acadêmica"
      subtitle="Base sólida em ciência da computação e aprendizado contínuo com cursos práticos."
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
      <h3 id="certificacoes-heading" class="section-title certificates-title">Certificações e cursos</h3>
      <p class="section-subtitle">Alguns certificados recentes que reforçam minha evolução técnica.</p>
    </div>

    <div class="carousel-container" aria-labelledby="certificacoes-heading">
      <Carousel
        v-if="certificados.length > 0"
        :value="certificados"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        circular
        :autoplayInterval="7000"
        class="certificates-carousel"
      >
        <template #item="slotProps">
          <article class="certificate-card">
            <img
              :src="getCertificateImageUrl(slotProps.data.image)"
              :alt="`Prévia do certificado ${slotProps.data.name}`"
              class="certificate-image"
              loading="lazy"
              @error="handleImageError"
            />
            <h4 class="certificate-title">{{ slotProps.data.name }}</h4>
            <a
              :href="getCertificatePdfUrl(slotProps.data.pdf)"
              target="_blank"
              rel="noopener noreferrer"
              class="certificate-link"
            >
              Abrir certificado
            </a>
          </article>
        </template>
      </Carousel>

      <p v-else class="loading-certificates">Carregando certificados...</p>
    </div>
  </section>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import { onMounted, ref } from 'vue';
import SectionHeader from '../components/SectionHeader.vue';

const getLogoUrlAcademica = (fileName) => new URL(`../assets/faculdades/${fileName}`, import.meta.url).href;
const getCertificateImageUrl = (fileName) =>
  new URL(`../assets/certificados/${fileName}`, import.meta.url).href;
const getCertificatePdfUrl = (fileName) =>
  new URL(`../assets/certificados/${fileName}`, import.meta.url).href;

const certificados = ref([]);

const responsiveOptions = [
  {
    breakpoint: '1200px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '820px',
    numVisible: 1,
    numScroll: 1,
  },
];

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

const loadCertificates = () => {
  certificados.value = [
    {
      image: 'Caio Pereira dos Santos - Curso Avançando com PHP_ Arrays, Strings, Função e Web - Alura_page-0001.jpg',
      pdf: 'Caio Pereira dos Santos - Curso Avançando com PHP_ Arrays, Strings, Função e Web - Alura.pdf',
      name: 'Curso Avançando com PHP: Arrays, Strings, Função e Web - Alura',
    },
    {
      image: 'Caio Pereira dos Santos - Curso Bootstrap5_ crie uma landing page responsiva - Alura_page-0001.jpg',
      pdf: 'Caio Pereira dos Santos - Curso Bootstrap5_ crie uma landing page responsiva - Alura.pdf',
      name: 'Curso Bootstrap5: Crie uma landing page responsiva - Alura',
    },
    {
      image: 'Caio Pereira dos Santos - Curso Git e Github_ controle e compartilhe seu código - Alura_page-0001.jpg',
      pdf: 'Caio Pereira dos Santos - Curso Git e Github_ controle e compartilhe seu código - Alura.pdf',
      name: 'Curso Git e Github: Controle e compartilhe seu código - Alura',
    },
    {
      image: 'Caio Pereira dos Santos - Curso PHP_ conceitos, lidando com dados, loops e mais - Alura_page-0001.jpg',
      pdf: 'Caio Pereira dos Santos - Curso PHP_ conceitos, lidando com dados, loops e mais - Alura.pdf',
      name: 'Curso PHP: Conceitos, lidando com dados, loops e mais - Alura',
    },
    {
      image: 'Caio Pereira dos Santos - Formação em Conectar_page-0001.jpg',
      pdf: 'Caio Pereira dos Santos - Formação em Conectar.pdf',
      name: 'Formação em Conectar',
    },
  ];
};

function handleImageError(event) {
  event.target.src = '/programmer-icon.svg';
}

onMounted(() => {
  loadCertificates();
});
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

.carousel-container {
  overflow: hidden;
}

.certificate-card {
  height: 100%;
  margin: 0.35rem;
  padding: 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  background: var(--surface-panel);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.certificate-card:hover {
  transform: translateY(-2px);
  border-color: rgba(58, 134, 255, 0.62);
}

.certificate-image {
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-radius: 10px;
}

.certificate-title {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.35;
}

.certificate-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border: 1px solid var(--accent-color);
  border-radius: 8px;
  padding: 0.45rem 0.72rem;
  color: var(--text-light);
  background: rgba(58, 134, 255, 0.18);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.certificate-link:hover {
  transform: translateY(-1px);
  background: var(--accent-color);
}

.certificate-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.loading-certificates {
  color: var(--text-muted);
  padding: 1rem 0;
}

:deep(.p-carousel-indicator) {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(160, 174, 200, 0.5);
}

:deep(.p-carousel-indicator.p-highlight) {
  background: var(--accent-color);
}

:deep(.p-carousel-prev-button),
:deep(.p-carousel-next-button) {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid var(--accent-color);
  color: var(--text-light);
  background: rgba(58, 134, 255, 0.22);
}

:deep(.p-carousel-prev-button:hover),
:deep(.p-carousel-next-button:hover) {
  background: var(--accent-color);
}

:deep(.p-carousel-prev-button:focus-visible),
:deep(.p-carousel-next-button:focus-visible) {
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

  .certificate-image {
    height: 160px;
  }
}
</style>