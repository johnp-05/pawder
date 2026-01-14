# Pawder 🐾

Pawder is a mobile application for pet adoption that uses a swipe-based interface similar to modern dating apps. Users can browse through pet profiles, swipe right to save their favorites, or swipe left to pass, making the pet adoption process more engaging and intuitive.

## Features

- 📸 **Camera Integration**: Take photos of pets directly within the app
- 🔄 **Swipe Interface**: Intuitive swipe gestures to like or pass on pets
- 📱 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🎨 **Interactive Gallery**: Review captured photos with swipe-to-save or swipe-to-delete functionality
- 👤 **User Profile**: Manage adoption preferences and view statistics
- 🔐 **Permission Management**: Seamless camera and media library permission handling

## Tech Stack

- **Framework**: [Expo](https://expo.dev) with React Native
- **Navigation**: Expo Router with file-based routing
- **Styling**: NativeWind (TailwindCSS for React Native)
- **Animations**: React Native Reanimated & Gesture Handler
- **State Management**: Zustand
- **Icons**: Lucide React Native
- **Language**: TypeScript

## Get Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app on your mobile device (for testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johnp-05/pawder.git
cd pawder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

### Running the App

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

You can also scan the QR code with the Expo Go app on your mobile device to run the app.

## Project Structure

```
pawder/
├── app/                    # App screens (file-based routing)
│   ├── (tabs)/            # Tab navigation screens
│   │   └── profile.tsx    # User profile screen
│   ├── _layout.tsx        # Root layout
│   ├── gallery.tsx        # Photo gallery screen
│   └── index.tsx          # Home/Camera screen
├── components/            # Reusable components
│   ├── atoms/            # Basic UI components
│   ├── molecules/        # Composite components
│   └── organisms/        # Complex components
├── lib/                  # Utility functions and hooks
│   ├── camera.ts         # Camera logic and permissions
│   ├── store.ts          # Global state management
│   └── swipe.ts          # Swipe gesture logic
└── assets/              # Images and static resources
```

## Key Features Explained

### Camera View
The camera view allows users to take photos with front and back camera support. It includes haptic feedback for a better user experience.

### Gallery View
Photos can be reviewed using an intuitive swipe interface:
- **Swipe Right**: Save photo to gallery
- **Swipe Left**: Delete photo
- Visual indicators show the action being performed

### Profile Screen
Displays user information, adoption preferences, and app settings. Features include:
- User statistics (likes, matches, adoptions)
- Adoption preferences
- Settings and configuration options

## Development

### Linting

```bash
npm run lint
```

### Reset Project

To start with a fresh project structure:

```bash
npm run reset-project
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and maintained by [Jhon Pambi](https://github.com/johnp-05).

## Acknowledgments

- Built with [Expo](https://expo.dev)
- Styled with [NativeWind](https://www.nativewind.dev)
- Icons by [Lucide](https://lucide.dev)

---

Made with ❤️ for pets
