# Explorador de Productos – Proyecto ABP

Este es un proyecto desarrollado en el marco de la materia Proyecto Integrador como parte del desarrollo de la evidencia N°3 y el ABP: Procesamiento de datos con APIs REST.

Carrera: Tecnicatura Superior en Ciencia de Datos e IA.

Alumno: Molina, Jonathan.

Ciclo lectivo: 2025.

El objetivo es construir una aplicación web interactiva para visualizar, filtrar y analizar productos provenientes de una API externa, aplicando conceptos de React, consumo de APIs, visualización de datos y estadística descriptiva.

## Funcionalidades planeadas

- Búsqueda de productos por nombre.
- Visualización de estadísticas (promedios, máximos, mínimos, etc.).
- Filtros por categoría, stock y rating.
- Gráficos dinámicos con Recharts.
- Exportación de datos filtrados a JSON/CSV/Excel.
- Modo claro/oscuro.
- Análisis de datos básico integrado en la UI.


## Tecnologías a utilizar

- React (Vite o CRA)
- Tailwind CSS
- Axios
- DummyJSON API (`https://dummyjson.com/products`)
- Recharts
- Herramientas de exportación (dependiendo del formato elegido)

### Estructura del proyecto

- `src/`: Carpeta principal del código fuente.
  - `components/`: Componentes reutilizables de la interfaz.
    - `DownloadJSON.jsx`: Componente para exportar datos filtrados en formato JSON.
    - `Graphs.jsx`: Componente para gráficos dinámicos con Recharts.
    - `ProductItem.jsx`: Componente que representa un producto individual.
    - `ProductList.jsx`: Componente que renderiza la lista de productos.
    - `SearchBar.jsx`: Barra de búsqueda de productos por nombre.
    - `StatsPanel.jsx`: Panel de estadísticas descriptivas (máximo, mínimo, promedio).
  - `App.jsx`: Componente raíz de la aplicación.
  - `App.css`: Estilos generales de la aplicación.
  - `index.css`: Estilos base de la aplicación.
  - `main.jsx`: Punto de entrada de la app (ReactDOM.render).
- `index.html`: Archivo HTML principal.
- `vite.config.js`: Configuración del proyecto con Vite.
- `tailwind.config.js`: Configuración de Tailwind CSS.
- `eslint.config.js`: Configuración de ESLint para análisis estático del código.
- `package.json`: Dependencias y scripts del proyecto.
- `package-lock.json`: Control de versiones de dependencias.
- `.gitignore`: Archivos y carpetas ignoradas por Git.
- `README.md`: Documentación del proyecto.

