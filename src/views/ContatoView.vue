<template>
  <section class="contact-shell" aria-labelledby="contato-heading">
    <div>
      <p class="contact-eyebrow">Próximo projeto</p>
      <h2 id="contato-heading">Vamos construir algo que funcione de verdade?</h2>
      <p>
        Estou aberto a conversar sobre oportunidades Full Stack, produtos digitais e desafios
        que envolvam evolução de sistemas.
      </p>
    </div>

    <div class="contact-actions">
      <a :href="getEmailUrl()" class="email-action">
        <span>Enviar e-mail</span>
        <strong>dev.caiop@gmail.com</strong>
        <i class="pi pi-arrow-up-right" aria-hidden="true"></i>
      </a>
      <div class="contact-links">
        <a :href="getLinkedInUrl()" target="_blank" rel="noopener noreferrer">
          LinkedIn <i class="pi pi-arrow-up-right" aria-hidden="true"></i>
        </a>
        <a :href="getGitHubUrl()" target="_blank" rel="noopener noreferrer">
          GitHub <i class="pi pi-arrow-up-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <p>Caio Pereira · Desenvolvedor Full Stack</p>
    <a href="#sobre">Voltar ao início <i class="pi pi-arrow-up" aria-hidden="true"></i></a>
  </footer>
</template>

<script setup>
import { useSocialLinks } from '../composables/useSocialLinks';

const { getEmailUrl, getGitHubUrl, getLinkedInUrl } = useSocialLinks();
</script>

<style scoped>
.contact-shell {
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  gap: clamp(2rem, 7vw, 7rem);
  padding: clamp(1.5rem, 5vw, 4.5rem);
  border-radius: 4px;
  background: var(--accent-color);
  color: #041019;
}

.contact-eyebrow {
  margin-bottom: 0.8rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.contact-shell h2 {
  max-width: 14ch;
  color: #041019;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  font-weight: 720;
  letter-spacing: -0.055em;
  line-height: 0.98;
}

.contact-shell > div > p:last-child {
  max-width: 54ch;
  margin-top: 1.2rem;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
}

.email-action {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.2rem 1rem;
  padding: 1rem;
  border: 1px solid rgba(4, 16, 25, 0.38);
  border-radius: 4px;
  color: #041019;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.email-action:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.2);
}

.email-action span {
  font-size: 0.72rem;
}

.email-action strong {
  font-size: clamp(0.85rem, 2vw, 1.05rem);
}

.email-action i {
  grid-column: 2;
  grid-row: 1 / 3;
  align-self: center;
}

.contact-links {
  display: flex;
  gap: 1rem;
}

.contact-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #041019;
  font-weight: 700;
  text-decoration: none;
}

.email-action:focus-visible,
.contact-links a:focus-visible,
.site-footer a:focus-visible {
  outline: 2px solid #041019;
  outline-offset: 3px;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.2rem 0 0;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.67rem;
}

.site-footer a {
  color: var(--text-muted);
  text-decoration: none;
}

@media (max-width: 760px) {
  .contact-shell {
    grid-template-columns: 1fr;
  }

  .site-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
