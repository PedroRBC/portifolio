<p align="center">
  <img src="https://github.com/pedrorbc.png" alt="Profile Image" width="100" />
</p>

## Info about my portfolio

This is the source code for my portfolio website hosted on [Vercel](https://vercel.com). The website showcases my skills, projects, and provides a way for visitors to contact me.

## Development

Use Bun 1.4.2 and install the versions pinned in `bun.lock`:

```sh
bun install --frozen-lockfile
bun run dev
```

To build and run locally in production mode:

```sh
bun run build
bun run start
```

Vercel uses Bun 1.4.x for the runtime, dependency installation, and Next.js build,
as configured in `vercel.json`. The `engines.node` entry selects Node.js 24.x for
Vercel tooling, overriding outdated Node.js settings in the Vercel project.
