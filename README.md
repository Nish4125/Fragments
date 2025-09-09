# Fragments
First Git repo for Lab 1 of BTI525 


1. Project Overview
Fragments is a Node.js/Express backend API project. This project uses:
- ESLint for linting
- Prettier for formatting
- Pino for structured logging
- Express for API server
The goal of this lab is to set up a clean development environment, a working server, structured
logging, linting, and debugging.
2. Setup Instructions
Clone Repo:
git clone git@github.com:<your-username>/fragments.git
cd fragments
Install Dependencies:
npm install
Run Server:
npm run dev
Server runs at http://localhost:8080.
Debug Mode:
LOG_LEVEL=debug npm run dev
3. Logging
All logging is handled by Pino.
- Default level: info
- Debug logs: LOG_LEVEL=debug npm run dev
4. Linting & Formatting
Lint: npm run lint
Prettier auto-formats on save in VSCode (.vscode/settings.json)
5. Project Structure
fragments/
src/
 logger.js
 app.js
 server.js
package.json
package-lock.json
README.md
.prettierrc
.prettierignore
.vscode/
 settings.json
 launch.json
debug.env
