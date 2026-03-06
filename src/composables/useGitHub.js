import { ref } from 'vue';
import { fetchRepos } from '../services/github';

export function useGitHub(username, options = {}) {
  const perPage = options.perPage ?? 12;
  const repos = ref([]);
  const loading = ref(true);
  const error = ref('');

  const loadRepos = async () => {
    if (!username) {
      error.value = 'Nome de usuário é obrigatório.';
      repos.value = [];
      loading.value = false;
      return;
    }

    loading.value = true;
    error.value = '';

    try {
      const data = await fetchRepos(username, perPage);
      repos.value = data.filter((repo) => !repo.fork && !repo.archived);
    } catch (err) {
      error.value = err.message || 'Erro ao carregar repositórios do GitHub.';
      repos.value = [];
    } finally {
      loading.value = false;
    }
  };

  const retry = () => {
    return loadRepos();
  };

  return {
    repos,
    loading,
    error,
    loadRepos,
    retry
  };
}