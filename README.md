# 📸 Pawder - Aplicación de Cámara con Gestos

**Pawder** es una aplicación móvil desarrollada con React Native y Expo que permite tomar fotografías y gestionarlas mediante gestos intuitivos de deslizamiento (swipe). Diseñada con una arquitectura moderna y componentizada, ofrece una experiencia fluida y atractiva.

## ✨ Características Principales

- 📷 **Captura de Fotos**: Toma fotografías con la cámara frontal o trasera
- 🔄 **Cambio de Cámara**: Alterna fácilmente entre cámara frontal y trasera
- 👆 **Gestos de Deslizamiento**: 
  - Desliza a la derecha para guardar fotos en la galería
  - Desliza a la izquierda para descartar fotos
  - Umbral de activación de 100px para mayor control
- 🎨 **Interfaz Moderna**: Diseño limpio con Tailwind CSS (NativeWind)
- 💾 **Gestión de Galería**: Organiza y visualiza tus fotos capturadas
- 🔐 **Permisos Inteligentes**: Solicitud clara de permisos de cámara y galería
- 📱 **Multiplataforma**: Compatible con iOS, Android y Web

## 🛠️ Tecnologías Utilizadas

### Core
- **React Native** (v0.83.1) - Framework principal
- **Expo** (v54) - Plataforma de desarrollo
- **TypeScript** (v5.9.2) - Tipado estático
- **Expo Router** (v6) - Navegación basada en archivos

### UI & Estilos
- **NativeWind** (v4.2.1) - Tailwind CSS para React Native
- **Lucide React Native** (v0.562.0) - Iconografía vectorial

### Gestos & Animaciones
- **React Native Gesture Handler** (v2.28.0) - Manejo de gestos táctiles
- **React Native Reanimated** (v4.1.1) - Animaciones fluidas de alto rendimiento

### Estado & Lógica
- **Zustand** (v5.0.9) - Gestión de estado global
- **Expo Camera** (v17) - API de cámara
- **Expo Media Library** (v18) - Acceso a la galería del dispositivo

## 📋 Requisitos Previos

- **Node.js** (v18 o superior)
- **npm** o **yarn**
- **Expo CLI**: Instalado globalmente o mediante npx
- Para desarrollo móvil:
  - **Android**: Android Studio con emulador configurado
  - **iOS**: Xcode (solo en macOS)
  - **Dispositivo físico**: Con la app Expo Go instalada

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/johnp-05/pawder.git
cd pawder
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm start
```

## 📱 Ejecutar la Aplicación

### Android
```bash
npm run android
```
O presiona `a` en el terminal después de `npm start`

### iOS (solo macOS)
```bash
npm run ios
```
O presiona `i` en el terminal después de `npm start`

### Web
```bash
npm run web
```
O presiona `w` en el terminal después de `npm start`

### Dispositivo Físico
1. Instala **Expo Go** desde:
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android)
   - [App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS)
2. Escanea el código QR mostrado en el terminal

## 📁 Estructura del Proyecto

```
pawder/
├── app/                        # Rutas de la aplicación (Expo Router)
│   ├── index.tsx              # Pantalla principal (cámara)
│   ├── gallery.tsx            # Galería de fotos
│   ├── (tabs)/                # Navegación por pestañas
│   │   └── profile.tsx        # Perfil de usuario
│   └── _layout.tsx            # Layout principal
│
├── components/                # Componentes organizados por Atomic Design
│   ├── atoms/                 # Componentes básicos reutilizables
│   │   ├── Button.tsx         # Botón con estilos de NativeWind
│   │   └── IconButton.tsx     # Botón con icono de Lucide
│   ├── molecules/             # Componentes compuestos
│   │   ├── CameraControl.tsx  # Controles de la cámara
│   │   └── PhotoCard.tsx      # Tarjeta de foto con gestos
│   └── organisms/             # Componentes complejos
│       ├── CameraView.tsx     # Vista completa de la cámara
│       └── GalleryView.tsx    # Vista de galería con swipe
│
├── lib/                       # Lógica de negocio y utilidades
│   ├── camera.ts              # Lógica de cámara y permisos
│   ├── swipe.ts               # Física de gestos (umbral 100px)
│   └── store.ts               # Store global con Zustand
│
├── assets/                    # Recursos estáticos
│   └── images/                # Imágenes, iconos y splash screens
│
├── .idx/                      # Configuración de IDX
├── app.json                   # Configuración de Expo
├── tailwind.config.js         # Configuración de Tailwind/NativeWind
├── tsconfig.json              # Configuración de TypeScript
└── package.json               # Dependencias del proyecto
```

## 🎮 Uso de la Aplicación

### Captura de Fotos
1. Abre la aplicación y concede los permisos solicitados
2. Apunta la cámara y toca el botón de captura
3. La foto aparecerá en la vista de galería

### Gestión con Gestos
- **Desliza hacia la derecha (→)**: Guarda la foto en tu galería
- **Desliza hacia la izquierda (←)**: Descarta la foto
- **Umbral mínimo**: 100 píxeles de deslizamiento para activar la acción
- **Feedback visual**: Animaciones de escala, rotación y opacidad

### Cambio de Cámara
- Toca el botón de alternancia para cambiar entre cámara frontal y trasera

## 🔐 Permisos Requeridos

La aplicación solicita los siguientes permisos:

- **📷 Cámara**: Para capturar fotografías
- **🎤 Micrófono**: Requerido por la API de cámara (no se graba audio)
- **🖼️ Galería/Media Library**: Para guardar fotos en el dispositivo

Todos los permisos se solicitan de forma clara y con explicaciones en la pantalla inicial.

## 🧪 Desarrollo

### Linting
```bash
npm run lint
```

### Reiniciar Proyecto
Para comenzar con una estructura limpia:
```bash
npm run reset-project
```
Esto moverá el código actual a `app-example/` y creará un directorio `app/` vacío.

## 🏗️ Arquitectura

### Patrones de Diseño
- **Atomic Design**: Componentes organizados en átomos, moléculas y organismos
- **Hooks Personalizados**: Lógica reutilizable (useCameraLogic, useSwipeGesture)
- **Estado Global**: Zustand para gestión centralizada del estado
- **File-based Routing**: Expo Router para navegación automática

### Física de Gestos
Los gestos de swipe implementan una física realista:
- Umbral de activación: **100px** (configurable)
- Animaciones con spring para suavidad natural
- Feedback visual con escala, rotación y opacidad
- Velocidad de deslizamiento considerada (>500px/s)

## 📚 Recursos Adicionales

- [Documentación de Expo](https://docs.expo.dev/)
- [Guía de Expo Router](https://docs.expo.dev/router/introduction/)
- [Documentación de NativeWind](https://www.nativewind.dev/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## 📝 Historial del Proyecto

Este proyecto se desarrolló en fases iterativas:

### Fase Inicial (Enero 2026)
- Configuración base con Expo y TypeScript
- Implementación de Tailwind CSS (NativeWind v4)
- Integración de iconos con Lucide React Native

### Fase de Desarrollo Core
- **Componentes Atómicos**: Button e IconButton con NativeWind
- **Lógica de Cámara**: Permisos y captura (lib/camera.ts)
- **Física de Swipe**: Gestos con umbral de 100px (lib/swipe.ts)
- **Store Global**: Configuración de Zustand (lib/store.ts)

### Fase de Componentes Complejos (BORRADOR)
- Implementación de CameraControl y PhotoCard (molecules)
- Desarrollo de CameraView y GalleryView (organisms)
- Integración de gestos en la galería
- Configuración de Babel para animaciones

### Fase Final (borrador 2)
- Estructura completa del proyecto con todas las pantallas
- Pantalla de permisos con UI mejorada
- Galería funcional con instrucciones de uso
- Perfil de usuario integrado
- Recursos visuales (iconos, splash screens)

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está en desarrollo activo. Para uso, modificación o distribución, contacta al autor.

## 👤 Autor

**Jhon Pambi**
- GitHub: [@johnp-05](https://github.com/johnp-05)
- Email: johndavispambi05@gmail.com

---

Desarrollado con ❤️ usando React Native y Expo
