## SAPUI5 Approaches

This is a mostly typescript monorepo based on npm workspaces showcasing available SAPUI5 frontend development approaches.

This is a work-in-progress, some package.json files need cleaning, some ui5.yaml files need renaming, etc..

### Project Structure

| Folder or File          | Purpose                                       |
| ----------------------- | --------------------------------------------- |
| `db/`                   | domain models and data                        |
| `srv/`                  | service models (TypeScript)                   |
| `app/launchpage.html`   | entry point for Fiori Launchpad               |
| `app/freestyle`         | SAPUI5 FreeStyle (TypeScript)                 |
| `app/fiori-annotations` | Fiori CDS Annotations                         |
| `app/fiori-extensions`  | Fiori View/Controller Extensions (JavaScript) |

### Install

```
npm ci
```

### Develop

Start backend with change monitoring on `db/` and `srv/`.

```
npm run watch
```

Start SAPUI5 FreeStyle with hot-reloading.

```
cd app/freestyle
npm start
```

Start Fiori CDS Annotions with hot-reloading.

```
cd app/fiori-annotations
npm run start-mock
```

Start Fiori View/Controller Extensions with hot-reloading.

```
cd app/fiori-extensions
npm run start-mock
```

In each frontend repo, build production files via:

```
npm run build
```

Access frontend from the launchpad via:

```
http://localhost:4004/launchpage.html
```

### To-Be-Updated

Unit and integration testing, CI/CD pipelines, deployment, etc...
