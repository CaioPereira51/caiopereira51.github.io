import { ref } from 'vue';
import { fetchRepos } from '../services/github';

export function useGitHub(username) {
  const repos = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const loadRepos = async () => {
    if (!username) {
      error.value = 'Nome de usuário é obrigatório';
      return;
    }

    loading.value = true;
    error.value = null;
    
    try {
      repos.value = await fetchRepos(username);
    } catch (err) {
      error.value = err.message || 'Erro ao carregar repositórios do GitHub';
      console.error('Erro ao buscar repositórios:', err);
    } finally {
      loading.value = false;
    }
  };

  const retry = () => {
    loadRepos();
  };

  return {
    repos,
    loading,
    error,
    loadRepos,
    retry
  };
}