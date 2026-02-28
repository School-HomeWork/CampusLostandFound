import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { Item } from "../types";
import { colors, spacing, typography, borderRadius, shadows } from "../theme";

/**
 * ItemCard Component
 * Displays a card with item details including type (lost/found), title, and description
 */
export const ItemCard = ({
  item,
  onPress,
}: {
  item: Item;
  onPress: () => void;
}) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      borderRadius: borderRadius.lg,
      overflow: "hidden",
      marginBottom: spacing.md,
      ...shadows.md,
    },
    header: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      backgroundColor: item.type === "lost" ? "#FEE2E2" : "#D1FAE5",
    },
    typeText: {
      ...typography.caption,
      fontWeight: "600",
      color: item.type === "lost" ? colors.danger : colors.secondary,
      textTransform: "uppercase",
    },
    title: {
      ...typography.h3,
      color: colors.dark,
      marginTop: spacing.sm,
    },
    body: {
      padding: spacing.lg,
    },
    description: {
      ...typography.bodySmall,
      color: colors.gray,
      marginBottom: spacing.md,
      lineHeight: 20,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    label: {
      ...typography.caption,
      color: colors.gray,
      fontWeight: "600",
    },
    value: {
      ...typography.bodySmall,
      color: colors.dark,
      marginTop: spacing.xs,
    },
    badge: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      borderRadius: borderRadius.full,
      backgroundColor: colors.lightGray,
    },
    badgeText: {
      ...typography.caption,
      color: colors.gray,
    },
    button: {
      paddingVertical: spacing.md,
      backgroundColor: colors.primary,
      borderRadius: borderRadius.lg,
      alignItems: "center",
      marginTop: spacing.lg,
    },
    buttonText: {
      ...typography.body,
      fontWeight: "600",
      color: colors.white,
    },
  });

  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.typeText}>
            {item.type === "lost" ? "❌ Lost Item" : "✅ Found Item"}
          </Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.row}>
            <Text style={styles.label}>📍 Location</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>📅 Date</Text>
            <Text style={styles.value}>
              {new Date(item.date).toLocaleDateString()}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>🏷️ Category</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.category}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Status</Text>
            <View
              style={[
                styles.badge,
                {
                  backgroundColor:
                    item.status === "active" ? "#DBEAFE" : "#D1FAE5",
                },
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  {
                    color:
                      item.status === "active"
                        ? colors.primary
                        : colors.secondary,
                  },
                ]}
              >
                {item.status === "active" ? "🔵 Active" : "✅ Resolved"}
              </Text>
            </View>
          </View>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>View Details →</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export const ItemListView = ({
  items,
  onItemPress,
}: {
  items: Item[];
  onItemPress: (item: Item) => void;
}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ItemCard item={item} onPress={() => onItemPress(item)} />
      )}
      scrollEnabled={false}
    />
  );
};
