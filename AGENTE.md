# Informe del Agente: Desarrollo de Página Web Multimedia - Portafolio Personal

**Materia:** Programación Gráfica y Multimedia I  
**Evaluación:** Examen Práctico (H-3 / EXAMENANGULAR)  
**Estudiante / Desarrollador:** Benjamín Ledezma Rosas  
**Perfil:** Desarrollador Web / Estudiante Universitario (Universidad UNIFRANZ)  
**Ciudad:** Cochabamba, Bolivia  
**Framework:** Angular 22.2.2 (Node.js v26.7.0, npm 11.19.0)  
**Plantilla de Referencia:** [iPortfolio - BootstrapMade](https://builder.bootstrapmade.com/demo/iPortfolio/)  

---

## 1. Resumen del Proyecto

Se ha desarrollado una aplicación web **Single Page Application (SPA)** de alto impacto visual y técnico utilizando **Angular 22**. El portafolio adapta fielmente la plantilla **iPortfolio (BootstrapMade)** e integra los datos oficiales y fotografías personales de **Benjamín Ledezma Rosas**, destacando su perfil como Desarrollador Junior especializado en desarrollo web y redes, estudiante de la Universidad UNIFRANZ.

El diseño del Hero se optimizó siguiendo las indicaciones del usuario: un encabezado limpio y elegante con tipografía fluida, fondo personal cinemático con red de partículas matemáticas en Canvas, sin botones invasivos, destacando la frase:
> *"Apasionado por la tecnología, el desarrollo de software y la inclusión digital."*

---

## 2. Entregables Cumplidos

### Entregable 1: Documento `AGENTE.md`
Este informe técnico documenta toda la arquitectura, estructura de datos personales, adaptación de componentes y comandos de ejecución.

### Entregable 2: Adaptación Fiel de la Plantilla iPortfolio
- **URL de Referencia:** `https://builder.bootstrapmade.com/demo/iPortfolio/`
- Se respetó la distribución característica:
  - **Barra lateral izquierda (Sidebar):** Menú fijo en escritorio con foto de perfil de Benjamín Ledezma Rosas, nombre, redes sociales, menú de navegación con tracking activo de scroll (*ScrollSpy*) y botón de menú móvil hamburguesa responsive.
  - **Área principal:**
    - `Hero`: Portada limpia y cinemática a pantalla completa con efecto mecanógrafo (*Typewriter*), fotografía personal de portada y red de partículas interactivas en Canvas.
    - `About`: Sección personal con datos biográficos oficiales (2005-01-08, 21 años, Cochabamba, UNIFRANZ, teléfono 67440132, email ledezmarosasbenjamin@gmail.com, GitHub y disponibilidad).
    - `Stats`: Métricas y contadores numéricos animados con aceleración cúbica.
    - `Skills`: Barras de progreso animadas categorizadas en desarrollo web, redes, computación gráfica y diseño de interfaces.
    - `Resume`: Línea de tiempo académica destacando la formación en la Universidad UNIFRANZ y proyectos de inclusión digital.
    - `Portfolio`: Galería interactiva con filtrado en tiempo real por categorías y modal Lightbox de pantalla completa.
    - `Services`: Catálogo de 6 servicios multimedia y tecnológicos con microinteracciones.
    - `Testimonials`: Carrusel dinámico de testimonios y valoraciones docentes/profesionales.
    - `Contact`: Formulario reactivo con validación en Angular, alertas de éxito y mapa interactivo ubicado en Cochabamba, Bolivia.
    - `Footer`: Pie de página con créditos académicos, enlace a la referencia iPortfolio y botón flotante de retorno suave arriba (*Scroll to top*).

### Entregable 3: Integración de Fotografías Personales de Cuerpo Completo
Las imágenes proporcionadas por el usuario se incorporaron preservando la visualización completa de cuerpo entero (de cabeza a pies con zapatillas) sin recortes:
1. **Fotografía 1 (`foto-parado.jpg` - De pie con casaca azul y bandana):**
   - Avatar circular en la cabecera / sidebar (`app-header`).
   - Retrato de cuerpo completo en la sección "Sobre Mí" (`app-about`) con marco estilizado y tarjetas de desarrollador junior.
   - Pieza destacada en el portafolio bajo el proyecto: *"Identidad Digital & Retrato Multimedia"*.
2. **Fotografía 2 (`foto-sentado.jpg` - Sentado en gradas con casaca azul y bandana):**
   - Fotografía de cuerpo completo en la portada principal (`app-hero`) enmarcada elegantemente junto a los datos personales y lema.
   - Obra destacada en el portafolio bajo el proyecto: *"Sesión Urbana & Dirección de Arte Digital"*.

---

## 3. Datos Personales Integrados

| Campo | Valor Oficial |
|---|---|
| **Nombre Completo** | Benjamín Ledezma Rosas |
| **Rol Principal** | Desarrollador Web / Estudiante |
| **Nivel / Especialidad** | Desarrollador Junior / Especialista en desarrollo web y redes |
| **Lema Personal** | Apasionado por la tecnología, el desarrollo de software y la inclusión digital. |
| **Fecha de Nacimiento** | 2005-01-08 |
| **Edad** | 21 años |
| **Ciudad** | Cochabamba, Bolivia |
| **Universidad** | Universidad UNIFRANZ |
| **Grado Académico** | Universitario |
| **Teléfono** | 67440132 |
| **Email** | ledezmarosasbenjamin@gmail.com |
| **GitHub** | https://github.com |
| **Disponibilidad** | Disponible |

---

## 4. Arquitectura de Código en Angular 22

El proyecto sigue la arquitectura recomendada por la guía oficial de Angular:

```
EXAMENANGULAR/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/             # Barra lateral fija con avatar de Benjamín Ledezma Rosas
│   │   │   ├── hero/               # Portada limpia con foto personal, typewriter y canvas
│   │   │   ├── about/              # Datos personales, UNIFRANZ y foto de pie
│   │   │   ├── stats/              # Contadores animados de métricas
│   │   │   ├── skills/             # Barras de habilidades web y redes animadas
│   │   │   ├── resume/             # Formación universitaria en UNIFRANZ
│   │   │   ├── portfolio/          # Galería filtrable y modal Lightbox
│   │   │   ├── services/           # Servicios web, redes y multimedia
│   │   │   ├── testimonials/       # Carrusel interactivo con valoraciones
│   │   │   ├── contact/            # Formulario interactivo y mapa de Cochabamba
│   │   │   └── footer/             # Créditos a Benjamín Ledezma Rosas y scroll top
│   │   ├── services/
│   │   │   ├── audio.service.ts    # Efectos sonoros UI y Web Audio API
│   │   │   └── portfolio.service.ts# Datos personales, navegación y portafolio
│   │   ├── app.ts                  # Componente raíz con scroll-spy
│   │   ├── app.html                # Maquetación de secciones
│   │   └── app.routes.ts           # Configuración de rutas
│   ├── index.html                  # Metadatos de Benjamín Ledezma Rosas y fuentes
│   ├── styles.css                  # Estilos globales y responsive
│   └── main.ts                     # Entrada de Angular 22
├── public/
│   └── assets/
│       ├── css/main.css            # Estilos base del template iPortfolio
│       ├── img/
│       │   ├── personal/           # Imágenes de Benjamín (foto-parado.jpg, foto-sentado.jpg)
│       │   ├── portfolio/          # Muestras gráficas del portafolio
│       │   └── testimonials/       # Avatares de evaluadores
│       └── vendor/                 # Bootstrap 5, Bootstrap Icons, AOS, GLightbox, Swiper
├── angular.json                    # Configuración de build optimizado
├── package.json                    # Dependencias de Angular 22
└── AGENTE.md                       # Documento de entrega
```

---

## 5. Instrucciones para Ejecutar y Compilar el Proyecto

### Requisitos Previos
- **Node.js:** v18+ o v20+ (probado con v26.7.0)
- **NPM:** v10+ o v11+
- **Angular CLI:** `npm install -g @angular/cli` (v22.2.2)

### Ejecución en Modo Desarrollo
En la terminal de PowerShell en la raíz del proyecto:
```bash
npm start
```
o bien:
```bash
ng serve
```
Abra el navegador en: `http://localhost:4200/`

### Compilación para Producción
```bash
npm run build
```
Compilación limpia con **0 errores y 0 advertencias** generada en `dist/portfolio`.
