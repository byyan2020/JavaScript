class Github {
    constructor() {
        this.clientId = '7dc85f132fdf952c520c';
        this.clientSecrets = '1e00fea8f25f3f35d582917dd4d12555a1baa6f1';
        this.reposCount = 5;
        this.reposSort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecrets}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecrets}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}