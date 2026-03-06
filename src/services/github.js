export async function fetchRepos(username, perPage = 12) {
  if (!username) {
    throw new Error('Usuário do GitHub não informado.');
  }

  const endpoint = new URL(`https://api.github.com/users/${username}/repos`);
  endpoint.searchParams.set('sort', 'updated');
  endpoint.searchParams.set('per_page', String(perPage));

  const response = await fetch(endpoint.toString(), {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar repositórios do GitHub.');
  }

  return response.json();
}