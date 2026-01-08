# 🐾 Pawder

**Pawder** es una aplicación móvil de adopción de mascotas con una interfaz intuitiva tipo Tinder. Toma fotos de mascotas, revísalas con gestos de deslizamiento y gestiona tu perfil de adopción.

## ✨ Características Principales

- 📸 **Cámara Integrada**: Captura fotos de mascotas directamente desde la app
- 👆 **Gestos de Deslizamiento**: 
  - Desliza a la derecha para guardar fotos en tu galería
  - Desliza a la izquierda para descartar fotos
- 🖼️ **Galería de Fotos**: Visualiza y gestiona todas las fotos capturadas
- 👤 **Perfil de Usuario**: Configura tus preferencias de adopción
  - Tipo de mascota (Perros, Gatos, etc.)
  - Edad preferida
  - Radio de búsqueda
- 📊 **Estadísticas**: Seguimiento de likes, matches y mascotas adoptadas
- 📳 **Retroalimentación Háptica**: Respuesta táctil para una mejor experiencia de usuario

## 🚀 Comenzar

### Prerequisitos

- Node.js instalado
- Expo CLI
- Un dispositivo móvil con Expo Go o un emulador Android/iOS

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/johnp-05/pawder.git
cd pawder
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia la aplicación:
```bash
npm start
```

### Ejecutar en Android

```bash
npm run android
```

Para IDX, los previews de Android se inician automáticamente como una tarea de VS Code. Si no encuentras la tarea:
- Reconstruye el entorno usando la paleta de comandos: `IDX: Rebuild Environment`, o
- Ejecuta manualmente: `npm run android -- --tunnel`

### Ejecutar en iOS

```bash
npm run ios
```

### Ejecutar en Web

```bash
npm run web
```

Los previews web se inician y gestionan automáticamente en IDX.

## 🛠️ Tecnologías

- **React Native** - Framework de desarrollo móvil
- **Expo** - Plataforma y conjunto de herramientas
- **Expo Router** - Enrutamiento basado en archivos
- **NativeWind** - Tailwind CSS para React Native
- **Expo Camera** - API de cámara
- **Expo Media Library** - Gestión de galería de fotos
- **Zustand** - Gestión de estado
- **Lucide React Native** - Iconos
- **TypeScript** - Tipado estático

## 📱 Permisos Requeridos

La aplicación requiere los siguientes permisos:
- 📷 **Cámara**: Para tomar fotos de mascotas
- 🎤 **Micrófono**: Para funcionalidad de cámara completa
- 🖼️ **Galería**: Para guardar y acceder a fotos

## 📂 Estructura del Proyecto

```
pawder/
├── app/                    # Pantallas principales (enrutamiento)
│   ├── (tabs)/            # Navegación por pestañas
│   │   └── profile.tsx    # Pantalla de perfil
│   ├── index.tsx          # Pantalla principal (cámara)
│   └── gallery.tsx        # Galería de fotos
├── components/            # Componentes reutilizables
│   ├── atoms/            # Componentes básicos
│   ├── molecules/        # Componentes compuestos
│   └── organisms/        # Componentes complejos
├── lib/                  # Lógica de negocio y utilidades
└── assets/              # Imágenes, fuentes, etc.
```

## 🎨 Características de UI/UX

- Diseño moderno con tema oscuro
- Animaciones suaves y transiciones
- Retroalimentación háptica en interacciones
- Interfaz intuitiva tipo swipe
- Diseño responsive

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## 📄 Licencia

Este proyecto es de uso privado.

## 👨‍💻 Autor

Desarrollado con ❤️ para mascotas

---

**Versión**: 1.0.0
