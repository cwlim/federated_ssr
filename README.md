# federated_ssr

This project takes advantage of ESM and url-imports to do server-side composition of microfrontends.  These MFEs are imported into the server and composed into "islands".

ESM url-imports in Node is currently an experimental feature and can be enabled:
```
node --experimental-network-imports
```

Tech Stack: 
- Astro as shell application
- SolidJS as MFE
- Vite as build tool
- Node 20

# Usage

## Micro-frontends
- Build the MFE with `npm run build`
- Start the MFE with `npm run preview`

## Shell application
- Build the shell with `npm run build`
- Start the shell with `npm run preview`
