# Bagh-e-Khizar

Bagh-e-Khizar is a modern, responsive website for presenting information about the organization, its publications, initiatives, and contact details.

## Live Website

Visit the production website:

[baghekhizar.org](https://baghekhizar.org/)

## Source Code

This repository contains the source code for the live website:

[GitHub Repository](https://github.com/Nafees-khan-29/bagh-e-khizar)

## Features

- Responsive design for desktop, tablet, and mobile devices
- Home page with an overview of Bagh-e-Khizar
- About page
- Publications page
- Initiatives page
- Contact page
- Reusable navigation bar and footer
- Client-side routing
- Scroll-to-top behavior between pages
- SEO metadata support
- Organization structured data for search engines
- Animated interface elements
- Custom 404 / Not Found page

## Website Pages

| Page | Route |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Publications | `/publications` |
| Initiatives | `/initiatives` |
| Contact | `/contact-us` |
| Not Found | `*` |

## Technology Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Oxlint](https://oxc.rs/)
- [Netlify](https://www.netlify.com/)

## Project Structure

```text
bagh-e-khizar/
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Website pages
│   │   ├── App.jsx          # Application routes and layout
│   │   ├── main.jsx         # Application entry point
│   │   ├── App.css          # Application styles
│   │   └── index.css        # Global styles
│   ├── package.json         # Frontend dependencies and scripts
│   └── vite.config.js       # Vite configuration
├── netlify.toml             # Netlify deployment configuration
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

Make sure the following software is installed:

- [Node.js](https://nodejs.org/) version 22 or later
- npm

### Clone the Repository

```bash
git clone https://github.com/Nafees-khan-29/bagh-e-khizar.git
cd bagh-e-khizar/frontend
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

After starting the server, open the local URL shown in the terminal. The default Vite URL is:

```text
http://localhost:5173
```

## Available Scripts

Run these commands from the `frontend` directory.

### Start Development Server

```bash
npm run dev
```

### Create a Production Build

```bash
npm run build
```

The production files will be generated in:

```text
frontend/dist
```

### Preview the Production Build

```bash
npm run preview
```

### Run Linting

```bash
npm run lint
```

## Deployment

The project includes a `netlify.toml` file for Netlify deployment.

The current deployment configuration is:

- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js version: `22`

To deploy the project using Netlify:

1. Sign in to Netlify.
2. Create a new site from Git.
3. Connect the GitHub repository.
4. Select the repository's `main` branch.
5. Netlify will use the settings in `netlify.toml`.
6. Deploy the site.

## Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes.
4. Run the linter:

   ```bash
   npm run lint
   ```

5. Test the production build:

   ```bash
   npm run build
   ```

6. Commit your changes:

   ```bash
   git add .
   git commit -m "Describe your changes"
   ```

7. Push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

8. Open a pull request.

## Links

- **Live Website:** [baghekhizar.org](https://baghekhizar.org/)
- **Source Code:** [Nafees-khan-29/bagh-e-khizar](https://github.com/Nafees-khan-29/bagh-e-khizar)
