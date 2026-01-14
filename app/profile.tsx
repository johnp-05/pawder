import {
    Bell,
    ChevronRight,
    Edit,
    HelpCircle,
    LogOut,
    MapPin,
    Settings,
    Shield
} from "lucide-react-native";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const menuItems = [
    { icon: Settings, title: "Configuración", subtitle: "Preferencias de la app", key: 'settings' },
    { icon: MapPin, title: "Ubicación", subtitle: "Guayaquil, Ecuador", key: 'location' },
    { icon: Bell, title: "Notificaciones", subtitle: "Gestionar alertas", key: 'notifications' },
    { icon: Shield, title: "Privacidad", subtitle: "Controla tu información", key: 'privacy' },
    { icon: HelpCircle, title: "Ayuda y Soporte", subtitle: "¿Necesitas ayuda?", key: 'help' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mi Perfil</Text>
        </View>

        {/* Profile Card */}
        {/* Nota: React Native no soporta gradientes de forma nativa en el prop style. 
            Se usa un color sólido o se requiere la librería expo-linear-gradient */}
        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <View style={styles.profileInfo}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarEmoji}>👤</Text>
              </View>
              <View>
                <Text style={styles.userName}>Ana García</Text>
                <Text style={styles.userTagline}>Amante de mascotas</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Edit size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Likes</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Matches</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Adoptados</Text>
            </View>
          </View>
        </View>

        {/* Preferences */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Preferencias de Adopción</Text>
          <View style={styles.preferencesBox}>
            <View style={styles.preferenceRow}>
              <Text style={styles.preferenceLabel}>Tipo de mascota</Text>
              <Text style={styles.preferenceValue}>Perros y Gatos</Text>
            </View>
            <View style={styles.preferenceRow}>
              <Text style={styles.preferenceLabel}>Edad preferida</Text>
              <Text style={styles.preferenceValue}>0-5 años</Text>
            </View>
            <View style={[styles.preferenceRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.preferenceLabel}>Radio de búsqueda</Text>
              <Text style={styles.preferenceValue}>20 km</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Configuración</Text>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={styles.menuItem}
              accessibilityLabel={item.title}
            >
              <View style={styles.menuItemLeft}>
                <View style={styles.iconContainer}>
                  <item.icon size={22} color="#6B7280" />
                </View>
                <View>
                  <Text style={styles.menuItemTitle}>{item.title}</Text>
                  <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
                </View>
              </View>
              <ChevronRight size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton}>
            <LogOut size={20} color="#EF4444" />
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Pawder v1.0.0</Text>
          <Text style={styles.footerText}>Hecho con ❤️ para mascotas</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  profileCard: {
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: '#9333EA', // Color sólido de reemplazo para el gradiente
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarEmoji: {
    fontSize: 40,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  userTagline: {
    color: 'white',
    opacity: 0.9,
  },
  editButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 12,
    borderRadius: 99,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    color: 'white',
    opacity: 0.9,
    fontSize: 14,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  preferencesBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 16,
  },
  preferenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  preferenceLabel: {
    color: '#374151',
  },
  preferenceValue: {
    color: '#111827',
    fontWeight: '600',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuItemTitle: {
    color: '#1F2937',
    fontWeight: '600',
    fontSize: 16,
  },
  menuItemSubtitle: {
    color: '#6B7280',
    fontSize: 14,
  },
  logoutContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#FEF2F2',
    borderRadius: 16,
  },
  logoutText: {
    color: '#EF4444',
    fontWeight: '600',
    marginLeft: 8,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  footerText: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 14,
    marginTop: 4,
  },
});