# 📚 CodeQuizzer – Application Structure

This document describes the current structure of the **CodeQuizzer** Angular 16 application, designed to train beginner developers using multiple-choice quiz questions.

---

## 📋 Topic List

### 🔷 Frontend
- **HTML** – Basics of HTML, elements, attributes.
- **JavaScript** – Syntax, data types, functions.
- **jQuery** – DOM manipulation, events, AJAX.
- **TypeScript** – Types, interfaces, classes.
- **Angular** – Components, services, routing.
- **React** – Components, state, props.
- **Next.js** – Server-side rendering, static site generation.
- **Vue.js** – Directives, components, reactivity.

### 🎨 Frontend Styling
- **CSS** – Selectors, properties, box model.
- **Sass** – Variables, nesting, mixins.
- **Less** – Variables, nesting, mixins.
- **Bootstrap** – Grid system, components, utilities.
- **Tailwind CSS** – Utility-first CSS, responsive design.
- **Material Design** – Components, theming, responsive design.

### 🔧 Backend
- **Python** – Syntax, data structures, functions.
- **Java** – OOP concepts, syntax, collections.
- **C#** – OOP concepts, syntax, LINQ.
- **C++** – OOP concepts, syntax, STL.
- **PHP** – Syntax, functions, arrays.

### 🗄️ Databases
- **SQL** – Queries, joins, transactions.
- **NoSQL** – MongoDB, document structure, queries.
- **PostgreSQL** – Advanced SQL, indexing, transactions.
- **MySQL** – SQL queries, joins, transactions.
- **SQLite** – Lightweight database, queries, transactions.
- **Redis** – Key-value store, caching, data structures.
- **GraphQL** – Queries, mutations, schema.
- **Firebase** – Realtime database, authentication, hosting.
- **MongoDB** – NoSQL database, document model, queries.

### 📱 Mobile Development
- **React Native** – Components, navigation, state management.
- **Flutter** – Widgets, state management, navigation.
- **Ionic** – Components, navigation, theming.

### 🎮 Game Development
- **Unity** – Game engine, C# scripting, physics.
- **Unreal Engine** – Game engine, C++ scripting, Blueprints.

### ☁️ Cloud and Serverless
- **AWS** – EC2, S3, Lambda, RDS.
- **Azure** – VMs, App Service, Functions, Cosmos DB.
- **Google Cloud** – Compute Engine, App Engine, Cloud Functions.
- **Firebase** – Realtime database, authentication, hosting.

### 🔄 DevOps and Infrastructure
- **Docker** – Containers, images, Dockerfile.  
- **Kubernetes** – Orchestration, pods, services.
- **CI/CD** – Continuous integration, deployment pipelines.
- **Git** – Version control, branching, merging.
- **GitHub** – Repositories, pull requests, issues.
- **GitLab** – Repositories, CI/CD, issues.
- **Bitbucket** – Repositories, pull requests, pipelines.
- **Jenkins** – Automation server, pipelines, plugins.
- **Travis CI** – Continuous integration, build automation.
- **CircleCI** – Continuous integration, build automation.

---

## 📄 Main Pages

- `Welcome` – Entry page.
- `Dashboard` – Overview of topics and performance.
- `Topic` – Select quiz topics.
- `Profile` – User profile and statistics.
- `Quiz` – Interactive quiz page.

---

## 📁 Folder Structure

```text
src/
├── app/
│   ├── pages/
│   │   ├── welcome/          # Welcome page
│   │   ├── dashboard/        # User dashboard
│   │   ├── topic/            # Topic selection
│   │   ├── profile/          # User profile
│   │   └── quiz/             # Quiz interface
│   │
│   ├── layouts/
│   │   ├── main-layout/      # Wrapper layout with header & footer
│   │   ├── header/           # Top navigation bar
│   │   └── footer/           # Bottom footer
│   │
│   ├── app-routing.module.ts  # Routing configuration
│   └── app.module.ts          # Root app module
│
├── assets/                   # Static files (icons, images, etc.)
├── environments/             # Environment configs
└── index.html                # Main HTML file
```

---

## 🧩 Components

- `HeaderComponent` – Top navigation bar.
- `FooterComponent` – Bottom footer.
- `WelcomePageComponent` – Welcome page with logo and login.
- `DashboardPageComponent` – User dashboard with profile and quiz list.
- `ProfilePageComponent` – User profile details.
- `QuizPageComponent` – Interactive quiz interface.
- `TopicComponent` – Topic selection interface.
- `LoginPageComponent` – User login form.
- `ProfileDetailComponent` – Detailed user profile view.
- `QuizListComponent` – List of available quizzes.
- `QuizDetailComponent` – View of a specific quiz.
- `QuizResultComponent` – Quiz results after completion.
- `QuizQuestionComponent` – Individual quiz question view.
- `QuizAnswerComponent` – Answer options for a question.

---

## 🔁 Routing Structure

The app uses a layout-based route structure. The `MainLayoutComponent` wraps all page routes using Angular child routes:

```ts
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: WelcomePageComponent },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'topic', component: TopicComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'quiz', component: QuizPageComponent }
    ]
  }
];
```

---

## 🧠 Future Development (To Do)

- ✅ Add route guards for protected pages (e.g. profile, quiz)
- ✅ Create data models: `Question`, `User`, `Topic`
- ⏳ Implement scoring system and quiz progress
- ⏳ Add dark mode support
- ⏳ Connect to API or LocalStorage
- ⏳ Add lazy loading for topic modules

---

© 2025 CodeQuizzer – All rights reserved.