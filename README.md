# federated_ssr

This project takes advantage of ESM and url-imports to do server-side composition of microfrontends.  These MFEs are dynamically imported into the server and composed into "islands".

ESM url-imports in Node is currently an experimental feature and can be enabled:
```
node --experimental-network-imports
```

Tech Stack: 
- Astro as shell application
- SolidJS as MFE