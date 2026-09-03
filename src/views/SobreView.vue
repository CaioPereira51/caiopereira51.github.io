<template>
  <section class="sobre-hero" aria-labelledby="sobre-nome">
    <article class="sobre-content">
      <div class="sobre-info">
        <p class="sobre-kicker"><span aria-hidden="true"></span> Disponível para novos desafios</p>
        <h1 id="sobre-nome" class="sobre-titulo">
          Caio Pereira,
          <strong>Desenvolvedor Full Stack.</strong>
        </h1>
        <p class="sobre-subtitulo">
          Experiência profissional desde 2022 na construção e evolução de aplicações web.
        </p>
        <p class="descricao">
          Atuo de ponta a ponta com Vue.js, Laravel, .NET e MySQL. Fora do trabalho, desenvolvo
          produtos que exploram aplicações desktop, IA local, APIs e automação de entrega.
        </p>

        <div class="hero-actions">
          <a href="#projetos" class="primary-action">
            Ver projetos
            <i class="pi pi-arrow-down" aria-hidden="true"></i>
          </a>
          <a href="#contato" class="secondary-action">
            Entrar em contato
          </a>
          <a href="/curriculo.pdf" class="text-action" target="_blank" rel="noopener noreferrer">
            Ver currículo
            <i class="pi pi-external-link" aria-hidden="true"></i>
          </a>
        </div>

        <ul class="social-list" aria-label="Perfis e contato">
          <li v-for="link in socialLinks" :key="link.label">
            <a
              :href="link.href"
              :target="link.target"
              :rel="link.target === '_blank' ? 'noopener noreferrer' : undefined"
            >
              <i :class="link.icon" aria-hidden="true"></i>
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>

      <aside class="hero-proof" aria-label="Resumo da atuação técnica">
        <div class="proof-topbar">
          <span>caio.build</span>
          <span class="proof-status"><i aria-hidden="true"></i> em evolução</span>
        </div>
        <div class="proof-body">
          <p class="proof-label">Construindo agora</p>
          <h2>Produtos completos,<br />da interface à entrega.</h2>
          <div class="architecture-flow" aria-label="Fluxo de competências">
            <div>
              <span>01</span>
              <strong>Interface</strong>
              <small>Vue · React</small>
            </div>
            <i class="pi pi-arrow-right" aria-hidden="true"></i>
            <div>
              <span>02</span>
              <strong>Aplicação</strong>
              <small>Laravel · .NET</small>
            </div>
            <i class="pi pi-arrow-right" aria-hidden="true"></i>
            <div>
              <span>03</span>
              <strong>Entrega</strong>
              <small>Docker · CI/CD</small>
            </div>
          </div>
          <div class="proof-footer">
            <span>WorkingSoftware</span>
            <span>desde 2022</span>
          </div>
        </div>
      </aside>
    </article>
  </section>
</template>

<script setup>
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
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
  gap: clamp(2.5rem, 6vw, 6.5rem);
  align-items: center;
  width: min(1120px, 100%);
  padding: clamp(1rem, 2vw, 2rem);
}

.sobre-info {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
}

.sobre-kicker {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
}

.sobre-kicker span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--signal-color);
  box-shadow: 0 0 0 5px rgba(93, 230, 184, 0.1);
}

.sobre-titulo {
  max-width: 13ch;
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 5.8rem);
  font-weight: 450;
  letter-spacing: -0.055em;
  line-height: 0.96;
}

.sobre-titulo strong {
  color: var(--accent-color);
  font-weight: 750;
}

.sobre-subtitulo {
  max-width: 52ch;
  font-size: clamp(1.15rem, 2.4vw, 1.45rem);
  color: var(--text-light);
  font-weight: 550;
  line-height: 1.35;
}

.descricao {
  max-width: 58ch;
  color: var(--text-muted);
  font-size: 1rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  margin-top: 0.8rem;
}

.primary-action,
.secondary-action,
.text-action {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  justify-content: center;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.primary-action,
.secondary-action {
  min-height: 46px;
  padding: 0.7rem 1rem;
  border-radius: 8px;
}

.primary-action {
  color: #041019;
  background: var(--accent-color);
  border: 1px solid var(--accent-color);
}

.secondary-action {
  color: var(--text-light);
  border: 1px solid var(--border-strong);
}

.text-action {
  color: var(--text-muted);
  padding: 0.6rem 0.25rem;
}

.primary-action:hover,
.secondary-action:hover,
.text-action:hover {
  transform: translateY(-2px);
}

.secondary-action:hover {
  border-color: var(--accent-color);
}

.primary-action:focus-visible,
.secondary-action:focus-visible,
.text-action:focus-visible,
.social-list a:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.social-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
  list-style: none;
  padding: 0;
  margin: 0.55rem 0 0;
}

.social-list a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-muted);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.73rem;
  transition: color 0.2s ease;
}

.social-list a:hover {
  color: var(--accent-color);
}

.hero-proof {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-strong);
  border-radius: 4px;
  background: rgba(10, 20, 31, 0.82);
  box-shadow: 28px 28px 0 rgba(24, 202, 213, 0.06);
  transform: rotate(1.2deg);
}

.hero-proof::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 100% 28px;
}

.proof-topbar,
.proof-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-muted);
}

.proof-topbar {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

.proof-status {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.proof-status i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--signal-color);
}

.proof-body {
  position: relative;
  z-index: 1;
  padding: clamp(1.5rem, 4vw, 2.8rem);
}

.proof-label {
  color: var(--accent-color);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.proof-body h2 {
  margin-top: 0.65rem;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 650;
  letter-spacing: -0.035em;
}

.architecture-flow {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 0.55rem;
  margin: 2.4rem 0;
}

.architecture-flow > div {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.architecture-flow span,
.architecture-flow small {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.62rem;
}

.architecture-flow strong {
  color: var(--text-light);
  font-size: 0.82rem;
}

.architecture-flow > i {
  color: var(--accent-color);
  font-size: 0.68rem;
}

.proof-footer {
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

@media (max-width: 960px) {
  .sobre-content {
    grid-template-columns: 1fr;
  }

  .sobre-info {
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .primary-action,
  .secondary-action {
    width: 100%;
  }

  .hero-proof {
    transform: none;
  }

  .architecture-flow {
    grid-template-columns: 1fr;
  }

  .architecture-flow > i {
    transform: rotate(90deg);
  }
}
</style>