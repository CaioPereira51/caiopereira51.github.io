<template>
  <section aria-labelledby="projetos-heading" class="section-shell projetos-section">
    <SectionHeader
      id="projetos-heading"
      eyebrow="Trabalho selecionado"
      title="Projetos que demonstram como eu construo"
      subtitle="Uma seleção intencional: produto, arquitetura e práticas de engenharia — não apenas repositórios recentes."
    />

    <div class="projetos-list">
      <article
        v-for="(project, index) in projects"
        :key="project.name"
        class="projeto-card"
        :class="{ featured: index === 0 }"
      >
        <header class="projeto-header">
          <div>
            <p class="project-index">Case {{ String(index + 1).padStart(2, '0') }} · {{ project.category }}</p>
            <h3 class="projeto-titulo">{{ project.name }}</h3>
            <p class="projeto-tagline">{{ project.tagline }}</p>
          </div>
          <span v-if="index === 0" class="featured-label">Projeto principal</span>
        </header>

        <div class="project-content">
          <div class="project-narrative">
            <div>
              <h4>Problema</h4>
              <p>{{ project.problem }}</p>
            </div>
            <div>
              <h4>Solução</h4>
              <p>{{ project.solution }}</p>
            </div>
          </div>

          <div class="project-details">
            <h4>Destaques técnicos</h4>
            <ul>
              <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </div>
        </div>

        <footer class="projeto-footer">
          <ul class="stack-list" :aria-label="`Tecnologias do projeto ${project.name}`">
            <li v-for="technology in project.stack" :key="technology">{{ technology }}</li>
          </ul>
          <a :href="project.url" class="botao-projeto" target="_blank" rel="noopener noreferrer">
            Explorar código
            <i class="pi pi-arrow-up-right" aria-hidden="true"></i>
          </a>
        </footer>
      </article>
    </div>

    <a
      href="https://github.com/CaioPereira51?tab=repositories"
      class="all-projects-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ver todos os repositórios no GitHub
      <i class="pi pi-arrow-right" aria-hidden="true"></i>
    </a>
  </section>
</template>

<script setup>
import SectionHeader from '../components/SectionHeader.vue';

const projects = [
  {
    name: 'MeuChat',
    category: 'Desktop · IA local',
    tagline: 'IA local, simples e sob o controle do usuário.',
    problem: 'Executar modelos de linguagem sem enviar conversas ou dados para serviços externos.',
    solution:
      'Aplicação desktop que detecta modelos GGUF, inicializa o Llamafile localmente e oferece chat com respostas em streaming.',
    highlights: [
      'Backend em Rust integrado à interface React por Tauri 2',
      'Gerenciamento e configuração individual de modelos',
      'Histórico local, exportação de chats e métricas do sistema',
    ],
    stack: ['Tauri 2', 'React 19', 'TypeScript', 'Rust', 'Llamafile'],
    url: 'https://github.com/CaioPereira51/meu-chat-app',
  },
  {
    name: 'Desafio Onfly',
    category: 'Produto Full Stack',
    tagline: 'Fluxo completo para gestão de viagens corporativas.',
    problem: 'Centralizar solicitações de viagem com regras distintas para colaboradores e administradores.',
    solution:
      'Sistema com autenticação JWT, API REST, filtros e workflow de solicitação, aprovação e cancelamento.',
    highlights: [
      'Autenticação e autorização por papéis de usuário',
      'API Laravel e interface Vue conectadas a MySQL',
      'Ambiente reproduzível com Docker Compose',
    ],
    stack: ['Laravel 10', 'Vue 3', 'MySQL', 'JWT', 'Docker'],
    url: 'https://github.com/CaioPereira51/desafio-onfly',
  },
  {
    name: 'Git Automação',
    category: 'Engenharia · CI/CD',
    tagline: 'Qualidade de código integrada ao fluxo de entrega.',
    problem: 'Validar mudanças de uma API de forma consistente antes que elas avancem entre ambientes.',
    solution:
      'API Express acompanhada por workflow de branches e pipeline automático de lint, testes e cobertura.',
    highlights: [
      'Pipeline de integração contínua com GitHub Actions',
      'Testes automatizados e relatório de cobertura',
      'Containerização e scripts para automação de pull requests',
    ],
    stack: ['Node.js', 'Express', 'Jest', 'Docker', 'GitHub Actions'],
    url: 'https://github.com/CaioPereira51/git-automacao-caio',
  },
];
</script>

<style scoped>
.projetos-section {
  width: 100%;
  padding: clamp(1.2rem, 2.4vw, 2rem);
}

.projetos-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.projeto-card {
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: clamp(1.25rem, 3vw, 2rem);
  background: rgba(10, 20, 31, 0.72);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.projeto-card.featured {
  grid-column: 1 / -1;
  padding: clamp(1.5rem, 4vw, 3rem);
  background:
    linear-gradient(120deg, rgba(24, 202, 213, 0.08), transparent 38%),
    rgba(10, 20, 31, 0.82);
  border-color: var(--border-strong);
}

.projeto-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-color);
}

.projeto-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.65rem;
}

.project-index {
  margin-bottom: 0.55rem;
  color: var(--accent-color);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.featured-label {
  border: 1px solid var(--accent-color);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
  color: var(--accent-color);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.projeto-titulo {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  letter-spacing: -0.04em;
}

.projeto-card:not(.featured) .projeto-titulo {
  font-size: clamp(1.65rem, 3vw, 2.3rem);
}

.projeto-tagline {
  margin-top: 0.45rem;
  color: var(--text-muted);
}

.project-content {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: clamp(1.5rem, 4vw, 4rem);
}

.projeto-card:not(.featured) .project-content {
  grid-template-columns: 1fr;
  gap: 1.2rem;
}

.project-narrative {
  display: grid;
  gap: 1.2rem;
}

.project-content h4 {
  margin-bottom: 0.35rem;
  color: var(--text-light);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-content p,
.project-details li {
  color: var(--text-base);
  font-size: 0.92rem;
}

.project-details ul {
  display: grid;
  gap: 0.45rem;
  margin: 0;
  padding-left: 1rem;
}

.project-details li::marker {
  color: var(--accent-color);
}

.projeto-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.2rem;
  border-top: 1px solid var(--border-subtle);
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.stack-list li {
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  padding: 0.25rem 0.55rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.62rem;
}

.botao-projeto {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.82rem;
  white-space: nowrap;
  transition: transform 0.2s ease, color 0.2s ease;
}

.botao-projeto:hover {
  transform: translateX(3px);
  color: var(--text-light);
}

.botao-projeto:focus-visible,
.all-projects-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.all-projects-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  color: var(--text-light);
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 760px) {
  .projetos-list,
  .project-content {
    grid-template-columns: 1fr;
  }

  .projeto-card.featured {
    grid-column: auto;
  }

  .featured-label {
    display: none;
  }

  .projeto-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>