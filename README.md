# 🐾 Pawder

**Pawder** es una aplicación móvil innovadora para la adopción de mascotas, inspirada en la experiencia de swipe de aplicaciones de citas pero diseñada específicamente para conectar mascotas con sus futuros dueños. Toma fotos, revisa tu galería y encuentra a tu compañero perfecto con gestos intuitivos.

## ✨ Características Principales

- 📷 **Cámara Integrada**: Captura fotos de mascotas con una interfaz limpia y fácil de usar
- 🔄 **Cambio de Cámara**: Alterna entre cámara frontal y trasera con un solo toque
- 👆 **Gestos de Swipe**: 
  - Desliza a la derecha para guardar fotos que te gustan
  - Desliza a la izquierda para descartar
  - Física de swipe con umbral de 100px para acciones precisas
- 📱 **Feedback Háptico**: Vibraciones sutiles que confirman cada acción
- 🖼️ **Galería de Fotos**: Revisa todas las fotos capturadas en una interfaz elegante
- 👤 **Perfil de Usuario**: Gestiona tus preferencias de adopción y configuración
- 🎨 **Interfaz Moderna**: Diseño oscuro y minimalista con TailwindCSS

## 🚀 Tecnologías Utilizadas

- **React Native** - Framework multiplataforma
- **Expo** - Plataforma de desarrollo
- **Expo Router** - Navegación basada en archivos
- **TypeScript** - Tipado estático
- **NativeWind** (TailwindCSS) - Estilos
- **Zustand** - Gestión de estado
- **React Native Reanimated** - Animaciones fluidas
- **React Native Gesture Handler** - Gestos táctiles avanzados
- **Expo Camera** - Acceso a la cámara
- **Expo Media Library** - Gestión de medios
- **Lucide React Native** - Iconos modernos

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Expo Go instalado en tu dispositivo móvil (opcional para pruebas)
- Android Studio (para emulador Android)
- Xcode (para emulador iOS, solo macOS)

## 🔧 Instalación

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
O con túnel para pruebas en dispositivos físicos:
```bash
npm run android -- --tunnel
```

### iOS (solo macOS)
```bash
npm run ios
```

### Web
```bash
npm run web
```

### Expo Go
1. Escanea el código QR que aparece en la terminal con la app Expo Go
2. La aplicación se cargará automáticamente en tu dispositivo

## 🔐 Permisos Necesarios

La aplicación requiere los siguientes permisos para funcionar correctamente:

- 📷 **Cámara**: Para tomar fotos de mascotas
- 🎤 **Micrófono**: Acceso opcional para funciones futuras
- 🖼️ **Galería/Media**: Para guardar y acceder a las fotos capturadas

Estos permisos se solicitan automáticamente al iniciar la aplicación por primera vez.

## 📂 Estructura del Proyecto

```
pawder/
├── app/                        # Rutas y pantallas de la app
│   ├── (tabs)/                 # Navegación por pestañas
│   │   └── profile.tsx         # Pantalla de perfil de usuario
│   ├── _layout.tsx             # Layout principal de la app
│   ├── index.tsx               # Pantalla inicial (cámara)
│   └── gallery.tsx             # Galería de fotos capturadas
├── components/                 # Componentes reutilizables
│   ├── atoms/                  # Componentes básicos
│   │   ├── Button.tsx          # Botón principal
│   │   └── IconButton.tsx      # Botón con icono
│   ├── molecules/              # Componentes compuestos
│   │   ├── CameraControl.tsx   # Controles de la cámara
│   │   └── PhotoCard.tsx       # Tarjeta de foto
│   └── organisms/              # Componentes complejos
│       ├── CameraView.tsx      # Vista completa de cámara
│       └── GalleryView.tsx     # Vista completa de galería
├── lib/                        # Lógica y utilidades
│   ├── camera.ts               # Lógica de la cámara y permisos
│   ├── store.ts                # Estado global (Zustand)
│   └── swipe.ts                # Gestos de swipe y animaciones
├── assets/                     # Recursos estáticos
│   └── images/                 # Imágenes e íconos de la app
└── ...                         # Archivos de configuración
```

## 🛠️ Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run android` - Ejecuta en Android
- `npm run ios` - Ejecuta en iOS
- `npm run web` - Ejecuta en navegador web
- `npm run lint` - Ejecuta el linter

## 🎯 Funcionalidades Implementadas

### Sistema de Cámara
- Captura de fotos con feedback visual y háptico
- Alternancia entre cámara frontal y trasera
- Vista previa en tiempo real
- Contador de fotos capturadas

### Sistema de Gestos
- Swipe con física realista y umbrales configurables
- Animaciones suaves con spring physics
- Indicadores visuales de dirección de swipe
- Reset automático si no se alcanza el umbral

### Perfil de Usuario
- Información personal editable
- Estadísticas de actividad (likes, matches, adopciones)
- Preferencias de adopción personalizables
- Menú de configuración completo

## 🌟 Próximas Características

- [ ] Integración con backend para perfiles de mascotas reales
- [ ] Sistema de matches y chat
- [ ] Filtros de búsqueda avanzados
- [ ] Geolocalización de refugios cercanos
- [ ] Notificaciones push
- [ ] Compartir perfiles en redes sociales

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/NuevaFuncion`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva función'`)
4. Haz push a la rama (`git push origin feature/NuevaFuncion`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Jhon Pambi**
- GitHub: [@johnp-05](https://github.com/johnp-05)
- Ubicación: Guayaquil, Ecuador

## 💖 Hecho con Amor

Pawder v1.0.0 - Hecho con ❤️ para mascotas

---

¿Necesitas ayuda? Abre un issue en GitHub o contáctanos.
