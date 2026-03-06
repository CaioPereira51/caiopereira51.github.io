<script setup>
import Navbar from './components/Navbar.vue'
import SobreView from './views/SobreView.vue'
import ProjetosView from './views/ProjetosView.vue'
import SkillsView from './views/SkillsView.vue'
import ExperienciaView from './views/ExperienciaView.vue'
import FormacaoView from './views/FormacaoView.vue'
</script>

<template>
  <Navbar />
  <main class="app-main">
    <section id="sobre" class="app-section full-section"><SobreView /></section>
    <section id="projetos" class="app-section full-section"><ProjetosView /></section>
    <section id="skills" class="app-section full-section"><SkillsView /></section>
    <section id="experiencia" class="app-section full-section"><ExperienciaView /></section>
    <section id="formacao" class="app-section full-section"><FormacaoView /></section>
  </main>
</template>

<style scoped>
.app-main {
  padding-top: var(--nav-offset, 96px);
}

.app-section {
  padding-block: clamp(1rem, 2.5vw, 2.5rem);
  scroll-margin-top: calc(var(--nav-offset, 96px) + 1rem);
}

.app-section > * {
  width: min(1120px, 100%);
  margin-inline: auto;
}

.full-section {
  min-height: calc(100vh - var(--nav-offset, 96px));
  display: flex;
  align-items: center;
}

@media (max-width: 900px) {
  .app-main {
    padding-top: calc(var(--nav-offset, 84px) + 0.5rem);
  }

  .app-section {
    padding-block: 0.85rem 1.45rem;
  }

  .full-section {
    min-height: auto;
  }
}
</style>
