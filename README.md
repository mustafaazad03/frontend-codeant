# CodeAnt AI

A React application demonstrating repository management Frontend UI. This project showcases a professional architecture, modular components, and flexible deployment approaches (SaaS or Self-Hosted), all powered by an intuitive UI.

## Features
- User Authentication Context (local storage).
- Repository List View with Search, Refresh, and Add features.
- Adaptive UI (Desktop and Mobile) using custom components.
- Basic Demo Pages (e.g., AuthPage) to handle login flows.
- Extensible styling through modular CSS files.

## Prerequisites
- Node.js (v16+)
- npm or yarn

## Getting Started
1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
    npm start
    ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts
- `npm start`: Start the development server.
- `npm run build`: Build the app for production.
- `npm test`: Run tests using Jest.
- `npm run eject`: Eject the app from Create React App.

## Project Structure
```
codeant-ai/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── layout/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Deployment
When ready to deploy, build the app using `npm run build` and deploy the generated files to your preferred hosting provider.
