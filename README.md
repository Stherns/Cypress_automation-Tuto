# Cypress_Tutorial_DSMM
Super, cette fois j’ai tout ! Tu fais vraiment un excellent travail structuré sur tes projets.
Voici maintenant ton **README ultra-pro pour ton projet Cypress** :

---

# 🚀 Cypress Automation Tutorial

[![Build Status](https://github.com/Stherns/Cypress_automation-Tuto/actions/workflows/cypress.yml/badge.svg)](https://github.com/Stherns/Cypress_automation-Tuto/actions)

---

## 📚 Objectif du projet

Ce projet propose un **tutoriel complet d’automatisation de tests end-to-end avec Cypress**.
Il couvre plusieurs fonctionnalités clés de Cypress pour les interactions utilisateur, les composants UI, les formulaires et événements avancés.

---

## 🛠 Technologies utilisées

| Outil               | Version          |
| ------------------- | ---------------- |
| Node.js             | 18+              |
| Cypress             | ^14.2.1          |
| Cypress Real Events | ^1.14.0          |
| Langage             | JavaScript (ES6) |

---

## 🗂 Structure du projet

```bash
.
├── cypress/
│   ├── e2e/
│   │   ├── account_software_demo.cy.js
│   │   ├── checkboxes.cy.js
│   │   ├── clear_text.cy.js
│   │   ├── dropdown.cy.js
│   │   ├── dynamic_dropdown.cy.js
│   │   ├── first_test.cy.js
│   │   ├── login.cy.js
│   │   ├── mouseover.cy.js
│   │   ├── mouseoverrealEvents.cy.js
│   │   ├── radio_buttons.cy.js
│   │   ├── re-registration.cy.js
│   │   ├── registration.cy.js
│   │   ├── scroll_into_views_and_scroll_to.cy.js
│   │   ├── test_1.cy.js
│   │   ├── upload_file_1.cy.js
│   │   └── upload_file_2.cy.js
│   ├── fixtures/
│   └── support/
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🔧 Configuration Cypress

Le fichier [`cypress.config.js`](cypress.config.js) contient :

```javascript
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners
    },
  },
};
```

La configuration est minimaliste ici mais peut facilement être enrichie.

---

## 📦 Installation

### Pré-requis

* Node.js >= 18.x
* npm ou yarn

### Installation

Cloner le dépôt :

```bash
git clone https://github.com/Stherns/Cypress_automation-Tuto.git
cd Cypress_automation-Tuto
```

Installer les dépendances :

```bash
npm install
```

---

## 🚀 Exécuter les tests

### Mode interactif (recommandé pour débuter) :

```bash
npx cypress open
```

### Mode headless (CI/CD) :

```bash
npx cypress run
```

### Exécuter un seul fichier de test :

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## 🔎 Fonctionnalités couvertes

* ✅ Tests de formulaires (login, registration)
* ✅ Sélecteurs multiples (id, class, name, contains…)
* ✅ Dropdowns statiques et dynamiques
* ✅ Checkboxes et boutons radio
* ✅ Mouse events (mouseover, mousemove, real-events plugin)
* ✅ Scroll automatique vers les éléments
* ✅ Upload de fichiers
* ✅ Gestion des événements réels via `cypress-real-events`

---

## 🧪 Exemple d’intégration CI/CD GitHub Actions

**`.github/workflows/cypress.yml`**

```yaml
name: Cypress Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 18

    - name: Install dependencies
      run: npm install

    - name: Run Cypress tests
      run: npx cypress run
```

---

## 📄 Licence

Licence MIT

---
