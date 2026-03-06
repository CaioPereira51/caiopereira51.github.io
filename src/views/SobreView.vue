<template>
  <section class="sobre-hero" aria-labelledby="sobre-nome">
    <article class="sobre-content section-shell">
      <div class="sobre-card-img">
        <img
          src="/programador.png"
          alt="Ilustração de desenvolvedor em ambiente de programação"
          class="avatar-ilustra"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <div class="sobre-info">
        <p class="sobre-kicker">Desenvolvedor FullStack</p>
        <h1 id="sobre-nome" class="sobre-titulo">Caio Pereira</h1>
        <p class="sobre-subtitulo">Construo soluções web com foco em qualidade, clareza e resultado.</p>
        <p class="descricao">
          Sou programador full stack apaixonado por tecnologia e especializado em análise e desenvolvimento
          de sistemas. Tenho experiência na criação de soluções eficientes, unindo visão técnica, foco no
          usuário e melhoria contínua para entregar valor real ao negócio.
        </p>

        <div class="botoes-sociais">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            class="social-btn"
            :target="link.target"
            :rel="link.target === '_blank' ? 'noopener noreferrer' : undefined"
            :aria-label="link.label"
          >
            <i :class="link.icon" aria-hidden="true"></i>
            <span class="sr-only">{{ link.label }}</span>
          </a>

          <a
            :href="curriculoUrl"
            class="botao-cv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar currículo em PDF"
          >
            <span>Baixar Currículo</span>
            <i class="pi pi-download" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import curriculoUrl from '../assets/Caio_Pereira_programador_2025.pdf';
import { useSocialLinks } from '../composables/useSocialLinks';

const { getEmailUrl, getGitHubUrl, getLinkedInUrl, getWhatsAppUrl } = useSocialLinks();

const socialLinks = [
  { label: 'GitHub', href: getGitHubUrl(), icon: 'pi pi-github', target: '_blank' },
  { label: 'LinkedIn', href: getLinkedInUrl(), icon: 'pi pi-linkedin', target: '_blank' },
  { label: 'E-mail', href: getEmailUrl(), icon: 'pi pi-envelope', target: '_self' },
  { label: 'WhatsApp', href: getWhatsAppUrl(), icon: 'pi pi-whatsapp', target: '_blank' },
];
</script>

<style scoped>
.sobre-hero {
  width: 100%;
}

.sobre-content {
  display: grid;
  grid-template-columns: minmax(260px, 38%) 1fr;
  gap: clamp(1.25rem, 3vw, 2.5rem);
  align-items: center;
  width: min(1120px, 100%);
  padding: clamp(1.25rem, 2.4vw, 2.4rem);
}

.sobre-card-img {
  min-height: 100%;
}

.avatar-ilustra {
  width: 100%;
  height: 100%;
  min-height: 320px;
  max-height: 520px;
  object-fit: cover;
  border-radius: 14px;
  border: 1px solid var(--border-subtle);
  box-shadow: 0 12px 24px rgba(6, 10, 26, 0.28);
}

.sobre-info {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
}

.sobre-kicker {
  color: var(--accent-color);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.78rem;
  font-weight: 600;
}

.sobre-titulo {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
}

.sobre-subtitulo {
  font-size: clamp(1.08rem, 2.4vw, 1.35rem);
  color: var(--secondary-color);
  font-weight: 500;
}

.descricao {
  max-width: 62ch;
  color: var(--text-base);
  font-size: clamp(1rem, 1.7vw, 1.08rem);
}

.botoes-sociais {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  margin-top: 0.55rem;
}

.social-btn {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-subtle);
  color: var(--text-light);
  background: rgba(58, 134, 255, 0.2);
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
  background: var(--accent-color);
}

.social-btn:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.social-btn i {
  font-size: 1.2rem;
}

.botao-cv {
  margin-left: 0.15rem;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: var(--accent-color);
  color: var(--text-light);
  border: 1px solid var(--accent-color);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.botao-cv:hover {
  transform: translateY(-2px);
  background: var(--accent-color-strong);
}

.botao-cv:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

@media (max-width: 960px) {
  .sobre-content {
    grid-template-columns: 1fr;
  }

  .avatar-ilustra {
    min-height: 260px;
    max-height: 340px;
  }

  .sobre-info {
    text-align: center;
    align-items: center;
  }

  .botoes-sociais {
    justify-content: center;
  }

  .botao-cv {
    margin-left: 0;
  }
}

@media (max-width: 560px) {
  .botao-cv {
    width: 100%;
    justify-content: center;
  }
}
</style>