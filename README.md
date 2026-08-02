# 💬 WhatsApp Web Clone - TP Final FrontEnd UTN

🔗 **Repositorio GitHub**: [github.com/FedericoHNunez/Tp_Final_FrontEnd_UTN](https://github.com/FedericoHNunez/Tp_Final_FrontEnd_UTN.git)

🔗 **Sitio Web (Demo en vivo)**: [tp-final-front-end-utn-puce.vercel.app](https://tp-final-front-end-utn-puce.vercel.app/)

Este proyecto es una réplica moderna, interactiva y responsiva de la interfaz de **WhatsApp Web**, desarrollada como Trabajo Práctico Integrador para el curso de **Desarrollo FrontEnd de la Universidad Tecnológica Nacional (UTN)**.

La aplicación simula el comportamiento de una plataforma de mensajería interactiva, implementando vistas fluidas, navegación dinámica y gestión de estado global.

---

## 🚀 Características Principales

*   **Gestión de Mensajes**:
    *   Envío de mensajes interactivos en tiempo real.
    *   Eliminación de mensajes individuales por ID.
    *   Borrado completo del historial de chats.
*   **Gestión de Contactos**:
    *   Creación de nuevos contactos con foto de perfil por defecto.
    *   Edición de la información del contacto (nombre, apellido, número de teléfono).
    *   Eliminación de contactos de la lista activa.
*   **Personalización de Temas**:
    *   Selección interactiva de temas visuales en tiempo real desde el perfil: **Clásico** (Verde WhatsApp original), **Violeta** y **Celeste**.
    *   Panel de configuración de perfil (`SectionMe`) con botones interactivos y vistas previas en color del tema activo.
    *   Implementación limpia a través de variables CSS semánticas aplicadas dinámicamente mediante el atributo `data-theme` en el `body`.
*   **Visualización de Chats No Leídos**:
    *   Indicador con un diseño degradado (gradient) sutil y redondeado utilizando variables nativas del proyecto a través de `color-mix()`.
    *   Limpieza automática del contador de mensajes no leídos (`unreadCount`) al hacer clic en el chat correspondiente para abrir la conversación.
*   **Buscador en Tiempo Real**:
    *   Barra de búsqueda que filtra dinámicamente la lista de chats o grupos activos por alias/nombre.
*   **Navegación Dinámica (Routing)**:
    *   Rutas dedicadas utilizando React Router para las secciones de:
        *   💬 Chats y conversaciones activas (`/chats/:contact_id`)
        *   ℹ️ Información del contacto (`/chats/contacts/:contact_id`)
        *   ✏️ Edición de contacto (`/chats/edit-contact/:contact_id`)
        *   ➕ Creación de nuevo contacto (`/chats/new-contact`)
        *   📞 Llamadas (`/calls`)
        *   📢 Canales (`/channels`)
        *   👥 Comunidades (`/communities`)
        *   🟢 Estados (`/states`)
        *   👤 Perfil del usuario (`/profile`)

---

## 🛠️ Tecnologías y Librerías Utilizadas

*   **React 19**: Desarrollo basado en componentes funcionales, Hooks (`useState`, `useEffect`, `useContext`, `useRef`) y Context API.
*   **Vite**: Herramienta de construcción (build tool) y servidor de desarrollo ultrarrápido.
*   **React Router v8 / v6**: Enrutamiento declarativo para la navegación entre vistas y paneles laterales.
*   **Vanilla CSS**: Diseño adaptado con variables personalizadas (`:root`) y selectores de atributo (`body[data-theme]`) para consistencia y personalización dinámica en la paleta de colores.
*   **React Icons**: Set de iconos vectoriales limpios y modernos.
*   **React Textarea Autosize**: Textarea de entrada de mensajes con ajuste automático de altura según el contenido.

---

## 📂 Estructura del Código

La estructura de carpetas sigue un patrón ordenado y modular para facilitar la escalabilidad:

```text
src/
├── assets/         # Recursos estáticos (imágenes, iconos, etc.)
├── Components/     # Componentes interactivos y reutilizables
│   ├── ChatBox/            # Componente de previsualización de cada chat
│   ├── ContactForm/        # Formularios para creación y edición
│   ├── MainNavigation/     # Barra de navegación lateral de la aplicación
│   ├── SideBars/           # Paneles dinámicos (Detalle de contacto, Nuevo contacto)
│   └── Modal.../           # Diálogos y modales de confirmación/opciones
├── Context/        # ContactContext.jsx (Estado de chats y mensajes) y ThemeContext.jsx (Gestión de temas visuales)
├── Data/           # contactsList.js (Mock de datos iniciales)
├── Hooks/          # Custom hooks para modularizar lógica de formularios de chat
├── Screens/        # Vistas principales y Layout principal de la app
└── utils/          # Funciones auxiliares de formateo (ej. timestamp de mensajes)
```

---

## 💻 Instalación y Uso Local

Para correr este proyecto localmente en tu computadora, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/FedericoHNunez/Tp_Final_FrontEnd_UTN.git
cd Tp_Final_FrontEnd_UTN
```

### 2. Instalar dependencias
Instala los paquetes necesarios definidos en el `package.json`:
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
Inicia el entorno local de Vite:
```bash
npm run dev
```
Abre en tu navegador la dirección indicada en la terminal (usualmente `http://localhost:5173`).

### 4. Construir para producción (Build)
Para compilar y optimizar la aplicación para su despliegue final:
```bash
npm run build
```

---

## 🎨 Personalización de Estilos y Temas

El sistema de diseño utiliza variables de CSS ubicadas en [index.css](file:///c:/Users/fenu1/Desktop/utn/Tp_integrador_FrontEnd_UTN/Tp_Final_FrontEnd_UTN/src/index.css). 

*   **Variables Semánticas**: Toda la interfaz utiliza variables temáticas como `--primary-color`, `--primary-light` y `--primary-bubble-bg` en lugar de colores fijos.
*   **Sobrescritura de Temas**: Cuando se selecciona un tema alternativo en el perfil (como Violeta o Celeste), se aplica un atributo en el body (ej. `body[data-theme="violet"]`), el cual redefine las variables de color primario en CSS de manera global y limpia.
*   **Efectos Dinámicos**: Los gradientes de mensajes no leídos se configuran dinámicamente en [ChatBox.css](file:///c:/Users/fenu1/Desktop/utn/Tp_integrador_FrontEnd_UTN/Tp_Final_FrontEnd_UTN/src/Components/ChatBox/ChatBox.css) empleando la directiva `color-mix()` para fusionar los tonos del tema activo con el canal alfa.
