import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { Button, Section } from '../components/UI';

export const ProfileScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.lg,
      paddingBottom: spacing.md,
      backgroundColor: colors.primary,
    },
    headerTitle: {
      ...typography.h2,
      color: colors.white,
    },
    content: {
      flex: 1,
      padding: spacing.lg,
    },
    card: {
      backgroundColor: colors.lightGray,
      padding: spacing.lg,
      borderRadius: 12,
      marginBottom: spacing.lg,
    },
    cardTitle: {
      ...typography.h3,
      color: colors.dark,
      marginBottom: spacing.md,
    },
    cardText: {
      ...typography.body,
      color: colors.gray,
      lineHeight: 24,
    },
    statContainer: {
      flexDirection: 'row',
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    stat: {
      flex: 1,
      backgroundColor: colors.lightGray,
      padding: spacing.lg,
      borderRadius: 12,
      alignItems: 'center',
    },
    statNumber: {
      ...typography.h2,
      color: colors.primary,
    },
    statLabel: {
      ...typography.caption,
      color: colors.gray,
      marginTop: spacing.sm,
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About This App</Text>
      </View>

      <View style={styles.content}>
        <Section title="Campus Lost & Found">
          <View style={styles.card}>
            <Text style={styles.cardText}>
              🎓 A modern platform for students to report and find lost or found items on campus.
              {'\n\n'}
              Help your community by posting about items you've lost or found!
            </Text>
          </View>
        </Section>

        <Section title="Quick Stats">
          <View style={styles.statContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>9</Text>
              <Text style={styles.statLabel}>Items Posted</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>100+</Text>
              <Text style={styles.statLabel}>Users</Text>
            </View>
          </View>
        </Section>

        <Section title="How It Works">
          <View style={styles.card}>
            <Text style={styles.cardTitle}>1️⃣ Browse</Text>
            <Text style={styles.cardText}>
              Search through lost and found items posted by other students.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>2️⃣ Post</Text>
            <Text style={styles.cardText}>
              Report lost or found items with detailed information.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>3️⃣ Connect</Text>
            <Text style={styles.cardText}>
              Contact the poster to arrange a meetup and reunite items with their owners!
            </Text>
          </View>
        </Section>

        <Section title="Tips">
          <View style={styles.card}>
            <Text style={styles.cardText}>
              💡 Be detailed: Include colors, brands, and unique features{'\n'}
              💡 Location matters: Specify exact location for better matches{'\n'}
              💡 Quick response: Check your messages frequently{'\n'}
              💡 Safety first: Meet in public areas on campus
            </Text>
          </View>
        </Section>

        <View style={{ marginBottom: spacing.xxl }}>
          <Button
            title="📧 Send Feedback"
            onPress={() => {}}
            variant="outline"
          />
        </View>
      </View>
    </ScrollView>
  );
};
