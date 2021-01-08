Configurer la BDD dans le .env
```bash
symfony server:start
# url de test => localhost:8000/api
```

config api platform
packages => api_platform.yml
routes => api_platform.yml

# Initialisation du projet

config la bdd dans le .env
```bash
composer install

npm install

php bin/console doctrine:database:create
```

# Doc Api-platform
## configuration
[config (pagination, etc.)](https://api-platform.com/docs/core/configuration/)
## mapping entities
[mapping entities](https://api-platform.com/docs/core/getting-started/#mapping-the-entities)
## Opération (CRUD)
[Opération](https://api-platform.com/docs/core/operations/)

[config (url, arg, etc.)](https://api-platform.com/docs/core/operations/#configuring-operations)

[SubResource](https://api-platform.com/docs/core/subresources/)

[CustomController](https://api-platform.com/docs/core/controllers/)

## Format & Sérialisation
[Json-ld, hydra & co](https://api-platform.com/docs/core/serialization/#available-serializers)
## pagination
[pagination](https://api-platform.com/docs/core/pagination/)
## filtre

[Filtre](https://api-platform.com/docs/core/filters/)

[SearchFilter](https://api-platform.com/docs/core/filters/#search-filter)

[OrdreFilter](https://api-platform.com/docs/core/filters/#order-filter-sorting)

[Child-properties](https://api-platform.com/docs/core/filters/#filtering-on-nested-properties)

# webpack-encore

[encore-doc](https://symfony.com/doc/4.4/frontend.html#getting-started)

# React

[Persist state (localStorage)](https://dev.to/akhilaariyachandra/persistent-state-in-react-f50
)