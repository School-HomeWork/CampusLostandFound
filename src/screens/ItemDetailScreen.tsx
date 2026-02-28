import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Linking, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Item } from '../types';
import { colors, spacing, typography, borderRadius, shadows } from '../theme';
import { Button, Section } from '../components/UI';

type Props = NativeStackScreenProps<RootStackParamList, 'ItemDetail'>;

export const ItemDetailScreen = ({ route, navigation }: Props) => {
  const { item } = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.lg,
      paddingBottom: spacing.md,
      backgroundColor: item.type === 'lost' ? '#FEE2E2' : '#D1FAE5',
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    typeIcon: {
      fontSize: 28,
    },
    statusBadge: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borderRadius.full,
      backgroundColor: item.status === 'active' ? '#DBEAFE' : '#D1FAE5',
    },
    statusText: {
      ...typography.caption,
      fontWeight: '600',
      color: item.status === 'active' ? colors.primary : colors.secondary,
    },
    title: {
      ...typography.h2,
      color: colors.dark,
      marginTop: spacing.md,
    },
    content: {
      flex: 1,
      padding: spacing.lg,
    },
    section: {
      marginBottom: spacing.lg,
    },
    sectionTitle: {
      ...typography.h3,
      color: colors.dark,
      marginBottom: spacing.md,
    },
    sectionContent: {
      backgroundColor: colors.lightGray,
      padding: spacing.lg,
      borderRadius: borderRadius.lg,
    },
    infoRow: {
      flexDirection: 'row',
      marginBottom: spacing.md,
      alignItems: 'flex-start',
    },
    infoIcon: {
      fontSize: 20,
      marginRight: spacing.md,
      width: 24,
    },
    infoContent: {
      flex: 1,
    },
    infoLabel: {
      ...typography.caption,
      color: colors.gray,
      fontWeight: '600',
      marginBottom: spacing.xs,
    },
    infoValue: {
      ...typography.body,
      color: colors.dark,
    },
    contactCard: {
      backgroundColor: colors.white,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      ...shadows.md,
      marginBottom: spacing.lg,
    },
    contactName: {
      ...typography.h3,
      color: colors.dark,
      marginBottom: spacing.md,
    },
    contactButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      backgroundColor: colors.lightGray,
      borderRadius: borderRadius.lg,
      marginBottom: spacing.md,
    },
    contactButtonText: {
      ...typography.body,
      color: colors.primary,
      marginLeft: spacing.md,
      fontWeight: '600',
    },
    actionButtons: {
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    backButton: {
      position: 'absolute',
      top: 0,
      left: spacing.lg,
      paddingVertical: spacing.md,
    },
    backButtonText: {
      fontSize: 24,
    },
  });

  const handleContact = (type: 'email' | 'phone', value: string) => {
    if (type === 'email') {
      Linking.openURL(`mailto:${value}`).catch(() => {
        Alert.alert('Error', 'Unable to open email client');
      });
    } else {
      Linking.openURL(`tel:${value}`).catch(() => {
        Alert.alert('Error', 'Unable to open phone');
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={{ flex: 1 }}>
            <Text style={styles.typeIcon}>
              {item.type === 'lost' ? '❌' : '✅'}
            </Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>
              {item.status === 'active' ? '🔵 Active' : '✅ Resolved'}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Description */}
        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <Text style={styles.infoValue}>{item.description}</Text>
          </View>
        </View>

        {/* Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.sectionContent}>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>🏷️</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Category</Text>
                <Text style={styles.infoValue}>{item.category}</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>📍</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Location</Text>
                <Text style={styles.infoValue}>{item.location}</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>📅</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Date Posted</Text>
                <Text style={styles.infoValue}>{new Date(item.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.contactCard}>
            <Text style={styles.contactName}>{item.contactName}</Text>

            <Pressable
              style={styles.contactButton}
              onPress={() => handleContact('email', item.contactEmail)}
            >
              <Text style={{ fontSize: 18 }}>📧</Text>
              <Text style={styles.contactButtonText}>{item.contactEmail}</Text>
            </Pressable>

            <Pressable
              style={styles.contactButton}
              onPress={() => handleContact('phone', item.contactPhone)}
            >
              <Text style={{ fontSize: 18 }}>📞</Text>
              <Text style={styles.contactButtonText}>{item.contactPhone}</Text>
            </Pressable>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title={item.type === 'lost' ? "👋 I Found This!" : "🙋 This Is Mine!"}
            onPress={() => {
              Alert.alert(
                'Success',
                `Your message has been sent to ${item.contactName}. They will get back to you soon!`,
                [{ text: 'OK' }]
              );
            }}
            variant="primary"
          />
          <Button
            title="🔗 Share This Item"
            onPress={() => {
              Alert.alert(
                'Share Item',
                'Share this item with your friends and help spread the word!'
              );
            }}
            variant="outline"
          />
        </View>
      </ScrollView>
    </View>
  );
};
