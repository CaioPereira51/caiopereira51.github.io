<template>
  <section aria-labelledby="projetos-heading" class="section-shell projetos-section">
    <SectionHeader
      id="projetos-heading"
      eyebrow="Portfólio"
      title="Projetos em destaque"
      subtitle="Projetos recentes do GitHub para mostrar stack, padrão de código e evolução contínua."
    />

    <p v-if="loading" class="status-message">Carregando projetos do GitHub...</p>
    <p v-else-if="error" class="status-message error">Não foi possível carregar os projetos agora.</p>

    <div v-else class="projetos-grid">
      <article v-for="repo in repos" :key="repo.id" class="projeto-card">
        <header class="projeto-header">
          <div class="projeto-title-wrap">
            <i class="pi pi-github" aria-hidden="true"></i>
            <h3 class="projeto-titulo">{{ repo.name }}</h3>
          </div>
          <span class="projeto-lang">{{ repo.language || 'N/A' }}</span>
        </header>

        <p class="projeto-desc">{{ repo.description || 'Sem descrição disponível no repositório.' }}</p>

        <footer class="projeto-footer">
          <div class="repo-stats" aria-label="Estatísticas do repositório">
            <span><i class="pi pi-star-fill" aria-hidden="true"></i> {{ repo.stargazers_count }}</span>
            <span><i class="pi pi-share-alt" aria-hidden="true"></i> {{ repo.forks_count }}</span>
          </div>

          <a
            :href="repo.html_url"
            class="botao-projeto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir repositório no GitHub"
          >
            Ver no GitHub
            <i class="pi pi-external-link" aria-hidden="true"></i>
          </a>
        </footer>
      </article>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import SectionHeader from '../components/SectionHeader.vue';
import { useGitHub } from '../composables/useGitHub';

const { repos, loading, error, loadRepos } = useGitHub('CaioPereira51', { perPage: 9 });

onMounted(() => {
  loadRepos();
});
</script>

<style scoped>
.projetos-section {
  width: 100%;
  padding: clamp(1.2rem, 2.4vw, 2rem);
}

.status-message {
  color: var(--text-muted);
  padding: 1rem 0;
}

.status-message.error {
  color: #ffc5c5;
}

.projetos-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.85rem, 2.1vw, 1.25rem);
}

.projeto-card {
  min-height: 240px;
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1.1rem;
  background: var(--surface-panel);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.projeto-card:hover {
  transform: translateY(-2px);
  border-color: rgba(58, 134, 255, 0.6);
}

.projeto-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.65rem;
}

.projeto-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.projeto-title-wrap i {
  color: var(--accent-color);
  font-size: 1.2rem;
}

.projeto-titulo {
  font-size: 1.05rem;
  color: var(--text-light);
}

.projeto-lang {
  font-size: 0.78rem;
  color: var(--text-light);
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  padding: 0.22rem 0.65rem;
  white-space: nowrap;
}

.projeto-desc {
  color: var(--text-base);
  font-size: 0.94rem;
}

.projeto-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
}

.repo-stats {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text-muted);
  font-size: 0.82rem;
}

.repo-stats span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.botao-projeto {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid var(--accent-color);
  color: var(--text-light);
  background: rgba(58, 134, 255, 0.18);
  border-radius: 8px;
  text-decoration: none;
  padding: 0.45rem 0.72rem;
  font-weight: 500;
  font-size: 0.84rem;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.botao-projeto:hover {
  transform: translateY(-1px);
  background: var(--accent-color);
}

.botao-projeto:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

@media (max-width: 1080px) {
  .projetos-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .projetos-grid {
    grid-template-columns: 1fr;
  }
}
</style>