import { Injectable, signal } from '@angular/core';

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'video' | 'angular' | 'graphics' | 'design';
  categoryLabel: string;
  image: string;
  shortDesc: string;
  client: string;
  date: string;
  projectUrl: string;
  technologies: string[];
  fullDesc: string;
  videoUrl?: string;
  isPersonalPhoto?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  public readonly personalInfo = {
    name: 'Benjamín Ledezma Rosas',
    role: 'Desarrollador Web / Estudiante',
    subRole: 'Desarrollador Junior & Especialista en desarrollo web y redes',
    specialty: 'Especialista en desarrollo web y redes',
    university: 'Universidad UNIFRANZ',
    level: 'Desarrollador Junior',
    typingRoles: [
      'Desarrollador Web',
      'Desarrollador Junior',
      'Especialista en desarrollo web y redes',
      'Estudiante UNIFRANZ'
    ],
    birthday: '2005-01-08',
    phone: '67440132',
    city: 'Cochabamba',
    age: '21',
    degree: 'Universitario',
    email: 'ledezmarosasbenjamin@gmail.com',
    freelance: 'Disponible',
    website: 'https://github.com',
    aboutParagraph1: 'Apasionado por la tecnología, el desarrollo de software y la inclusión digital.',
    aboutParagraph2: 'Desarrollador Junior y estudiante universitario en la Universidad UNIFRANZ, con especialidad en desarrollo web y redes. Comprometido con la innovación, la eficiencia técnica y la creación de aplicaciones funcionales de alto impacto.',
    profileImg: 'assets/img/personal/foto-parado.jpg',
    heroBgImg: 'assets/img/personal/foto-sentado.jpg'
  };

  public readonly navItems: NavItem[] = [
    { id: 'hero', label: 'Inicio', icon: 'bi-house' },
    { id: 'about', label: 'Sobre Mí', icon: 'bi-person' },
    { id: 'stats', label: 'Métricas', icon: 'bi-bar-chart' },
    { id: 'skills', label: 'Habilidades', icon: 'bi-stars' },
    { id: 'resume', label: 'Currículum', icon: 'bi-file-earmark-text' },
    { id: 'portfolio', label: 'Portafolio', icon: 'bi-images' },
    { id: 'services', label: 'Servicios', icon: 'bi-hdd-stack' },
    { id: 'testimonials', label: 'Testimonios', icon: 'bi-chat-quote' },
    { id: 'contact', label: 'Contacto', icon: 'bi-envelope' },
  ];

  public readonly activeSection = signal<string>('hero');
  public readonly mobileNavOpen = signal<boolean>(false);

  public readonly portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Sesión Urbana & Dirección de Arte Digital',
      category: 'video',
      categoryLabel: 'Video & Multimedia',
      image: 'assets/img/personal/foto-sentado.jpg',
      shortDesc: 'Producción de fotografía de autor y composición visual de estilo urbano.',
      client: 'Campaña Multimedia Universitaria',
      date: 'Octubre 2026',
      projectUrl: '#',
      technologies: ['Adobe Premiere', 'Lightroom Pro', 'Color Grading', 'After Effects'],
      fullDesc: 'Proyecto integral de dirección artística visual combinando captura fotográfica en locación urbana, balance tonal cinematográfico y etalonaje digital. La imagen captura la identidad contemporánea y la energía creativa juvenil.',
      isPersonalPhoto: true
    },
    {
      id: 2,
      title: 'Identidad Digital & Retrato Multimedia',
      category: 'design',
      categoryLabel: 'Diseño & Audio',
      image: 'assets/img/personal/foto-parado.jpg',
      shortDesc: 'Branding personal profesional y composición gráfica de alto impacto.',
      client: 'Portfolio Personal Oficial',
      date: 'Septiembre 2026',
      projectUrl: '#',
      technologies: ['Photoshop CC', 'Figma', 'UI/UX Design', 'Branding Digital'],
      fullDesc: 'Desarrollo de imagen institucional y perfil profesional para plataformas interactivas. Integración de paleta de colores corporativa iPortfolio y optimización de render para dispositivos retina.',
      isPersonalPhoto: true
    },
    {
      id: 3,
      title: 'Portal Web Multimedia Angular 22',
      category: 'angular',
      categoryLabel: 'Desarrollo Angular & Web',
      image: 'assets/img/portfolio/app-1.jpg',
      shortDesc: 'Plataforma web de última generación con Signals, Web Audio API y Canvas.',
      client: 'Examen Programación Gráfica y Multimedia I',
      date: 'Octubre 2026',
      projectUrl: '#',
      technologies: ['Angular 22', 'TypeScript', 'Bootstrap 5', 'Canvas API', 'Signals'],
      fullDesc: 'Aplicación web SPA moderna construida con la versión más reciente de Angular 22. Incorpora síntesis de sonido en tiempo real con Web Audio API, partículas interactivas reactivas al cursor y carga dinámica modular.',
    },
    {
      id: 4,
      title: 'Render 3D & Simulación de Partículas WebGL',
      category: 'graphics',
      categoryLabel: 'Modelado 3D & Gráficos',
      image: 'assets/img/portfolio/product-1.jpg',
      shortDesc: 'Escenario tridimensional interactivo con física de partículas.',
      client: 'Laboratorio de Gráficos por Computadora',
      date: 'Agosto 2026',
      projectUrl: '#',
      technologies: ['Three.js', 'WebGL', 'GLSL Shaders', 'Blender 3D'],
      fullDesc: 'Entorno virtual 3D que corre nativamente en navegadores web mediante aceleración por GPU. Permite orbitar la cámara, manipular iluminación volumétrica y modificar la gravedad de los emisores.',
    },
    {
      id: 5,
      title: 'Postproducción Audiovisual & Demoreel',
      category: 'video',
      categoryLabel: 'Video & Multimedia',
      image: 'assets/img/portfolio/branding-1.jpg',
      shortDesc: 'Edición dinámica de video comercial con efectos visuales VFX.',
      client: 'Agencia Creativa Pulsar',
      date: 'Julio 2026',
      projectUrl: '#',
      technologies: ['DaVinci Resolve', 'After Effects', 'Sound Design', '4K H.265'],
      fullDesc: 'Demoreel audiovisual que exhibe cortes al ritmo musical, títulos tipográficos en movimiento 3D y masterización de pistas de audio multicanal.',
    },
    {
      id: 6,
      title: 'Sistema de Audio Sintetizado y Soundboard',
      category: 'design',
      categoryLabel: 'Diseño & Audio',
      image: 'assets/img/portfolio/books-1.jpg',
      shortDesc: 'Interfaz táctil para creación de samples sonoros y efectos ambientales.',
      client: 'Proyecto Multimedia Experimental',
      date: 'Junio 2026',
      projectUrl: '#',
      technologies: ['Web Audio API', 'Osciladores Polifónicos', 'DSP', 'CSS3 Neo-Brutalism'],
      fullDesc: 'Herramienta interactiva que sintetiza ondas senoidales, cuadradas y triangulares mediante programación matemática de frecuencias de audio, permitiendo generar melodías armónicas procedurales.',
    },
    {
      id: 7,
      title: 'Dashboard de Análisis Multimedia en Tiempo Real',
      category: 'angular',
      categoryLabel: 'Desarrollo Angular & Web',
      image: 'assets/img/portfolio/app-2.jpg',
      shortDesc: 'Panel de control para streaming de video y estadísticas de render.',
      client: 'TechMedia Cloud',
      date: 'Mayo 2026',
      projectUrl: '#',
      technologies: ['Angular 22', 'RxJS', 'WebSockets', 'Chart.js'],
      fullDesc: 'Dashboard reactivo que monitoriza flujos de renderizado distribuido, consumo de memoria VRAM y bitrate de transmisiones en vivo con gráficos dinámicos.',
    },
    {
      id: 8,
      title: 'Escultura Digital 3D & Personajes',
      category: 'graphics',
      categoryLabel: 'Modelado 3D & Gráficos',
      image: 'assets/img/portfolio/product-2.jpg',
      shortDesc: 'Modelado de alta densidad poligonal y texturizado PBR.',
      client: 'GameStudio Indie',
      date: 'Abril 2026',
      projectUrl: '#',
      technologies: ['ZBrush', 'Blender', 'Substance Painter', 'Marmoset Toolbag'],
      fullDesc: 'Creación de un asset 3D orgánico con mapa de normales, oclusión ambiental y mapas de rugosidad para su implementación en motores de videojuegos interactivos.',
    },
    {
      id: 9,
      title: 'Diseño de Sistema UI/UX & Design Tokens',
      category: 'design',
      categoryLabel: 'Diseño & Audio',
      image: 'assets/img/portfolio/branding-2.jpg',
      shortDesc: 'Guía de estilos escalable y biblioteca de componentes accesibles.',
      client: 'Open Source Initiative',
      date: 'Marzo 2026',
      projectUrl: '#',
      technologies: ['Figma Tokens', 'Storybook', 'Design Systems', 'WCAG AAA'],
      fullDesc: 'Ecosistema de diseño completo que unifica tipografía, espaciado, paletas accesibles en modo oscuro y claro, así como especificaciones para desarrolladores Angular.',
    }
  ];

  public readonly selectedProject = signal<PortfolioItem | null>(null);

  public selectProject(item: PortfolioItem | null): void {
    this.selectedProject.set(item);
  }

  public toggleMobileNav(): void {
    this.mobileNavOpen.update(v => !v);
  }

  public closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }

  public setActiveSection(section: string): void {
    this.activeSection.set(section);
  }
}
