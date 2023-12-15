# Micro-Frontends Showcase

This monorepo contains three related projects: apps/host, apps/rick-and-morty-app, and apps/harry-potter-app. Each of these projects is designed to display character data from specific series.

# Projects
1. apps/host
This project serves as the main host and provides a structure for the secondary projects. It does not have specific functionality to display character data but acts as the main component that aggregates the other two projects.

2. apps/rick-and-morty-app
This project is designed to display character data from the "Rick and Morty" series. It uses common packages created specifically for this project and integrates with the main host.

3. apps/harry-potter-app
Similar to the previous project, this one displays character data from the "Harry Potter" series. Like the "Rick and Morty" project, it shares common packages and integrates with the main host.

Common Packages
Both application projects (rick-and-morty-app and harry-potter-app) use common packages created for this monorepo. These common packages are located in shared locations to facilitate maintenance and code consistency.

Management Tool: Lerna
The management of this monorepo is done using the Lerna tool. Lerna is a tool that facilitates the management of JavaScript projects with multiple packages. It allows efficient management of dependencies, versions, and publication.

# Monorepo Structure
The structure of the monorepo is as follows:


# Monorepo Root

- `apps/`
  - `host/`
  - `rick-and-morty-app/`
  - `harry-potter-app/`

- `packages/`
  - `common-package-1/`
  - `common-package-2/`

- `lerna.json`
- `package.json`
- `README.md`

- **apps/:** Contains the application projects.
- **packages/:** Contains common packages shared between the applications.
- **lerna.json:** Lerna configuration for the monorepo.
- **package.json:** Main configuration file for the monorepo.
- **README.md:** This file.

# Development Instructions

To start development on any of the projects, follow these steps:

Clone this repository: git clone <REPO_URL>
Install monorepo dependencies: npm install
Navigate to the specific project: cd apps/project-name
Install project dependencies: npm install
Start the project: npm start
Contributions
Contributions are welcome! If you wish to contribute to any of the projects or improve common packages, follow the contribution guidelines in each project.
