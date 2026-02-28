import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../theme';

/**
 * Reusable Button Component
 * Supports multiple variants: primary, secondary, and outline
 */
export const Button = ({ 
  title, 
  onPress, 
  variant = 'primary',
  disabled = false,
}: { 
  title: string; 
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}) => {
  const styles = StyleSheet.create({
    button: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.lg,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: variant === 'primary' ? colors.primary : 
                       variant === 'secondary' ? colors.secondary :
                       'transparent',
      borderWidth: variant === 'outline' ? 2 : 0,
      borderColor: variant === 'outline' ? colors.primary : 'transparent',
      opacity: disabled ? 0.5 : 1,
    },
    text: {
      ...typography.body,
      fontWeight: '600',
      color: variant === 'outline' ? colors.primary : colors.white,
    },
  });

  return (
    <Pressable 
      style={styles.button} 
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export const Card = ({ 
  children, 
  style 
}: { 
  children: React.ReactNode;
  style?: any;
}) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      ...shadows.md,
    },
  });

  return <View style={[styles.card, style]}>{children}</View>;
};

export const Badge = ({ 
  label, 
  type = 'default' 
}: { 
  label: string;
  type?: 'default' | 'success' | 'warning' | 'danger';
}) => {
  const styles = StyleSheet.create({
    badge: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      borderRadius: borderRadius.full,
      alignSelf: 'flex-start',
      backgroundColor: type === 'success' ? colors.secondary :
                       type === 'warning' ? colors.accent :
                       type === 'danger' ? colors.danger :
                       colors.lightGray,
    },
    text: {
      ...typography.caption,
      color: type === 'default' ? colors.gray : colors.white,
    },
  });

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export const SearchBar = ({ 
  value, 
  onChangeText,
  placeholder = 'Search...'
}: { 
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.lightGray,
      borderRadius: borderRadius.lg,
      paddingHorizontal: spacing.md,
      marginBottom: spacing.md,
    },
    input: {
      flex: 1,
      paddingVertical: spacing.md,
      ...typography.body,
      color: colors.dark,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.gray, marginRight: spacing.sm }}>🔍</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
      />
    </View>
  );
};

export const Section = ({ 
  title, 
  children 
}: { 
  title: string;
  children: React.ReactNode;
}) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: spacing.lg,
    },
    title: {
      ...typography.h3,
      color: colors.dark,
      marginBottom: spacing.md,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

export const EmptyState = ({ 
  title, 
  message,
  icon = '📦'
}: { 
  title: string;
  message: string;
  icon?: string;
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing.lg,
    },
    icon: {
      fontSize: 64,
      marginBottom: spacing.lg,
    },
    title: {
      ...typography.h3,
      color: colors.dark,
      marginBottom: spacing.sm,
      textAlign: 'center',
    },
    message: {
      ...typography.bodySmall,
      color: colors.gray,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export const LoadingSpinner = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      ...typography.body,
      color: colors.primary,
      marginTop: spacing.md,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>⏳</Text>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};
