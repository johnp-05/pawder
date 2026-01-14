# Pawder 📱🐾

Una aplicación de cámara móvil tipo Tinder para mascotas, construida con React Native y Expo. Toma fotos de mascotas y desliza para guardarlas o descartarlas.

## 🌟 Características

- 📸 **Cámara integrada**: Captura fotos con cámara frontal y trasera
- 👆 **Gestos tipo swipe**: Desliza a la derecha para guardar, a la izquierda para descartar
- 🖼️ **Galería de fotos**: Revisa tus fotos capturadas antes de guardarlas
- 📱 **Feedback háptico**: Vibraciones para confirmar acciones
- 👤 **Perfil de usuario**: Página de perfil con estadísticas y preferencias

## 🚀 Comenzar

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn
- Expo CLI
- Dispositivo móvil con la app Expo Go, o un emulador de Android/iOS

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

3. Inicia el servidor de desarrollo:
```bash
npm start
```

### Ejecutar en diferentes plataformas

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Web
```bash
npm run web
```

## 🏗️ Estructura del Proyecto

```
pawder/
├── app/                      # Pantallas de la aplicación
│   ├── index.tsx            # Pantalla principal con cámara
│   ├── gallery.tsx          # Galería de fotos
│   ├── profile.tsx          # Perfil de usuario
│   └── _layout.tsx          # Layout raíz
├── components/              # Componentes reutilizables
│   ├── atoms/              # Componentes básicos (Button, IconButton)
│   ├── molecules/          # Componentes compuestos (CameraControl, PhotoCard)
│   └── organisms/          # Componentes complejos (CameraView, GalleryView)
├── lib/                    # Lógica de negocio y utilidades
│   ├── camera.ts           # Lógica de cámara y permisos
│   ├── swipe.ts            # Gestos de deslizamiento
│   └── store.ts            # Estado de la aplicación (Zustand)
└── assets/                 # Imágenes y recursos estáticos
```

## 🛠️ Tecnologías Utilizadas

- **React Native**: Framework para aplicaciones móviles
- **Expo**: Plataforma de desarrollo
- **Expo Router**: Navegación basada en archivos
- **Expo Camera**: API de cámara
- **React Native Reanimated**: Animaciones fluidas
- **React Native Gesture Handler**: Manejo de gestos
- **NativeWind**: Tailwind CSS para React Native
- **Zustand**: Gestión de estado
- **Lucide React Native**: Iconos

## 📝 Características Principales

### Cámara
- Alterna entre cámara frontal y trasera
- Captura fotos de alta calidad
- Feedback visual y háptico al tomar fotos

### Galería
- Visualiza fotos en formato de tarjetas deslizables
- Desliza derecha para guardar en la galería del dispositivo
- Desliza izquierda para descartar
- Animaciones suaves con física realista

### Perfil
- Estadísticas de uso (Likes, Matches, Adoptados)
- Preferencias de adopción de mascotas
- Configuración de la aplicación
- Gestión de cuenta

## 🔐 Permisos Requeridos

La aplicación solicita los siguientes permisos:
- 📷 **Cámara**: Para capturar fotos
- 🎤 **Micrófono**: Para grabación de video (funcionalidad futura)
- 🖼️ **Galería**: Para guardar fotos en el dispositivo

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**Jhon Pambi** - [@johnp-05](https://github.com/johnp-05)

## 🙏 Agradecimientos

- Expo team por el excelente framework
- Comunidad de React Native
- Todos los contribuidores del proyecto

---

Hecho con ❤️ para mascotas 🐶🐱
