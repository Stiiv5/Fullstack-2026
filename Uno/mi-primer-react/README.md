# 🚀 NullVoice Cloud: Sistema de Gestión de Talento

Sistema Full Stack desarrollado con **React (Vite)** y **FastAPI**, diseñado para la gestión eficiente de recursos humanos, reportes salariales y control de datos en tiempo real.

## ✨ Características Principales
* **CRUD Completo:** Gestión de empleados (Crear, Leer, Actualizar, Eliminar).
* **Modo Dark/Light:** Interfaz adaptable con persistencia de tema.
* **Dashboard Inteligente:** Buscador en tiempo real y filtrado de datos.
* **Reportes Visuales:** Gráficos dinámicos con Recharts para análisis salarial.
* **Exportación de Datos:** Descarga de reportes en formato CSV compatible con Excel.
* **Notificaciones:** Feedback visual mediante Toasts reactivos.

## 🛠️ Tecnologías Utilizadas
* **Frontend:** React 18, Tailwind CSS v4, React Router, Recharts, Lucide Icons.
* **Backend:** Python 3.x, FastAPI, SQLite3 (Uso de SQL puro).

. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Stiiv5/Fullstack-2026/tree/main/Uno](https://github.com/Stiiv5/Fullstack-2026/tree/main/Uno)


** Configurar el backend
    cd backend
    pip install fastapi uvicorn
    python main.py

** Configurar el frontend
    cd frontend
    npm install
    npm run dev

Desarrollado por [BrayanC/NullVoice] - 2026
### 2. El archivo `.gitignore` (La limpieza interna)
Es **vital** no subir basura al repositorio. No queremos que subas la carpeta `node_modules` (que pesa gigas) ni los archivos temporales de Python.

Revisa que en la raíz de tu proyecto tengas un archivo llamado `.gitignore` con esto:

```text
# Node
node_modules/
dist/
dist-ssr
*.local

# Python
__pycache__/
*.py[cod]
*$py.class
venv/
env/

# Base de Datos (A veces es mejor no subir el archivo .db real por privacidad)
*.db






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
