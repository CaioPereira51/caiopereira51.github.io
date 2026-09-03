<script setup>
import Navbar from './components/Navbar.vue'
import SobreView from './views/SobreView.vue'
import ProjetosView from './views/ProjetosView.vue'
import ExperienciaView from './views/ExperienciaView.vue'
import SkillsView from './views/SkillsView.vue'
import FormacaoView from './views/FormacaoView.vue'
import ContatoView from './views/ContatoView.vue'
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <Navbar />
  <main id="conteudo" class="app-main">
    <section id="sobre" class="app-section full-section"><SobreView /></section>
    <section id="projetos" class="app-section"><ProjetosView /></section>
    <section id="experiencia" class="app-section"><ExperienciaView /></section>
    <section id="stack" class="app-section"><SkillsView /></section>
    <section id="formacao" class="app-section"><FormacaoView /></section>
    <section id="contato" class="app-section contact-section"><ContatoView /></section>
  </main>
</template>

<style scoped>
.app-main {
  padding-top: var(--nav-offset, 72px);
}

.app-section {
  padding-block: clamp(2.8rem, 7vw, 6.5rem);
  scroll-margin-top: calc(var(--nav-offset, 72px) + 1rem);
}

.app-section > * {
  width: min(1120px, 100%);
  margin-inline: auto;
}

.full-section {
  min-height: calc(100vh - var(--nav-offset, 72px));
  display: flex;
  align-items: center;
}

.contact-section {
  padding-bottom: clamp(1.5rem, 4vw, 3rem);
}

@media (max-width: 900px) {
  .app-main {
    padding-top: var(--nav-offset, 64px);
  }

  .app-section {
    padding-block: clamp(2.5rem, 10vw, 4.5rem);
  }

  .full-section {
    min-height: auto;
  }
}
</style>
