# Flavorium

The web app for recipe sharing built
with [SvelteKit](https://kit.svelte.dev/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/)
which uses [Appwrite](https://appwrite.io/) as a backend service.

## Authors

The project was developed by:

- [Wojciech Łopata](https://github.com/WojciechLopata),
- [Rafał Małucha](https://github.com/RafalMalucha),
- [Konrad Kubczyk](https://github.com/konradkubczyk).

## Developing

Once the project is downloaded, install dependencies with `npm install` and start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building and previewing

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target
> environment.

## Other commands

### Lint

The command below checks the code for formatting issues using Prettier (`prettier --check .`) and for potential code
quality issues using ESLint (`eslint .`).

```bash
npm run lint
```

### Format

This command formats the code using Prettier.

```bash
npm run format
```

### Check

The following command handles type-related generation tasks.

```bash
npm run check
```

`check:watch` is a watch mode version of `check`.
