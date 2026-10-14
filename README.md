# Portafolio Personal Web Multimedia - Angular 22

**Estudiante / Desarrollador:** Benjamín Ledezma Rosas  
**Perfil:** Desarrollador Web / Estudiante Universitario  
**Especialidad:** Desarrollador Junior - Especialista en desarrollo web y redes  
**Universidad:** Universidad UNIFRANZ &bull; Cochabamba, Bolivia  
**Materia:** Programación Gráfica y Multimedia I  
**Evaluación:** Examen Práctico (H-3 / EXAMENANGULAR)  

---

## 🌟 Descripción del Proyecto

Aplicación web interactiva desarrollada en **Angular 22** basada en la plantilla de referencia **[iPortfolio (BootstrapMade)](https://builder.bootstrapmade.com/demo/iPortfolio/)**. Incorpora arquitectura moderna de componentes independientes (*Standalone Components*), reactividad con **Signals**, efectos de computación gráfica interactiva con **HTML5 Canvas**, diseño responsivo adaptado y fotografías personales de cuerpo completo.

> *"Apasionado por la tecnología, el desarrollo de software y la inclusión digital."*

---

## 🚀 Tecnologías Utilizadas

- **Framework:** Angular 22.2.2
- **Lenguaje:** TypeScript 5.8
- **Estilos:** CSS3 Avanzado & Bootstrap 5.3.3
- **Iconografía:** Bootstrap Icons 1.11.3
- **Gráficos & Canvas:** HTML5 Canvas API (Red de partículas interactiva reactiva al cursor)
- **Animaciones:** AOS (Animate On Scroll) & Transiciones CSS3
- **Empaquetador / Bundler:** `@angular/build:application` (esbuild / Vite)

---

## 📁 Estructura del Proyecto

```
EXAMENANGULAR/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/             # Barra lateral fija con avatar y navegación iPortfolio
│   │   │   ├── hero/               # Portada con foto personal de cuerpo completo y canvas
│   │   │   ├── about/              # Perfil, UNIFRANZ y retrato de cuerpo entero
│   │   │   ├── stats/              # Métricas y contadores animados
│   │   │   ├── skills/             # Barras de habilidades en desarrollo web y redes
│   │   │   ├── resume/             # Currículum y formación universitaria UNIFRANZ
│   │   │   ├── portfolio/          # Galería interactiva con filtros y modal Lightbox
│   │   │   ├── services/           # Servicios tecnológicos y de desarrollo
│   │   │   ├── testimonials/       # Carrusel dinámico de testimonios
│   │   │   ├── contact/            # Formulario reactivo y mapa de Cochabamba
│   │   │   └── footer/             # Créditos y botón de retorno al inicio
│   │   ├── services/
│   │   │   ├── audio.service.ts    # Efectos sonoros UI con Web Audio API
│   │   │   └── portfolio.service.ts# Estado global y datos personales de Benjamín
│   │   ├── app.ts                  # Componente raíz con ScrollSpy
│   │   ├── app.html                # Plantilla principal SPA
│   │   └── app.routes.ts           # Configuración de rutas
│   ├── index.html                  # Metadatos, fuentes Google y estilos
│   ├── styles.css                  # Estilos globales y diseño responsivo
│   └── main.ts                     # Punto de entrada de la aplicación
├── public/
│   └── assets/
│       ├── css/main.css            # Estilos del template iPortfolio
│       ├── img/
│       │   ├── personal/           # Fotografías de cuerpo completo (foto-parado.jpg, foto-sentado.jpg)
│       │   └── portfolio/          # Muestras de proyectos
│       └── vendor/                 # Dependencias (Bootstrap, AOS, etc.)
├── angular.json                    # Configuración de build optimizado
├── package.json                    # Dependencias del proyecto
└── AGENTE.md                       # Informe técnico detallado de entrega
```

---

## 💻 Instalación y Ejecución Local

### Prerrequisitos
- Node.js (v18, v20 o v26)
- NPM
- Angular CLI: `npm install -g @angular/cli`

### Pasos

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ledezmarosasbenjamin-droid/portafolio-angular.git
   cd portafolio-angular
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm start
   # o: ng serve
   ```

4. Abrir en el navegador:
   ```
   http://localhost:4200/
   ```

### Compilar para Producción
```bash
npm run build
# Los archivos optimizados se generan en dist/portfolio
```

---

## 📬 Contacto
- **Desarrollador:** Benjamín Ledezma Rosas
- **Email:** ledezmarosasbenjamin@gmail.com
- **Teléfono:** 67440132
- **Ciudad:** Cochabamba, Bolivia
- **GitHub:** [ledezmarosasbenjamin-droid](https://github.com/ledezmarosasbenjamin-droid)
