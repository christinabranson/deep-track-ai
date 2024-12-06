# Deep Track API

> Discovering new music with generative AI

## Local development

Prequesities:
- Projen
- Node/nvm

1. Activate the project and install dependencies:

    ```bash
    projen
    ```

    **WARNING**: This is an open todo, but this will cause a `pages` directory
    to be created in the root of the project which will interfere with the rest of the site.
    If this gets created, just do a `rm -rf pages` to remove this!

2. Start the local development server:

    ```bash
    projen dev
    ```

    By default, this will be available at http://localhost:3000/deep-track-ai/