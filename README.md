# Next.js + Turbopack

This example allows you to get started with `next dev --turbo` quicky.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-turbopack&project-name=with-turbopack&repository-name=with-turbopack)

## Environment Variables

To configure the application, create a `.env` file in the root directory with the following content:

```
# Environment Variables
SOCKET_URL=http://localhost:3001
```

This variable is used to set the socket connection URL for the application.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-turbopack with-turbopack-app
```

```bash
yarn create next-app --example with-turbopack with-turbopack-app
```

```bash
pnpm create next-app --example with-turbopack with-turbopack-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
