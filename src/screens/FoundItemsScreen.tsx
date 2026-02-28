import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { colors, spacing, typography } from "../theme";
import {
  getMockItems,
  searchItems,
  filterByCategory,
  CATEGORIES,
} from "../data/mockData";
import { SearchBar, Section, EmptyState } from "../components/UI";
import { ItemListView } from "../components/ItemCard";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export const FoundItemsScreen = () => {
  const navigation = useNavigation<NavProp>();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allItems = getMockItems("found");
  let filteredItems = searchItems(allItems, searchQuery);
  filteredItems = filterByCategory(filteredItems, selectedCategory);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.lg,
      paddingBottom: spacing.md,
      backgroundColor: colors.secondary,
    },
    headerTitle: {
      ...typography.h2,
      color: colors.white,
      marginBottom: spacing.md,
    },
    content: {
      flex: 1,
      padding: spacing.lg,
    },
    categoryScroll: {
      flexDirection: "row",
      marginBottom: spacing.lg,
    },
    categoryButton: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: 20,
      marginRight: spacing.md,
      borderWidth: 1,
    },
    categoryButtonActive: {
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
    },
    categoryButtonInactive: {
      backgroundColor: colors.lightGray,
      borderColor: colors.border,
    },
    categoryText: {
      ...typography.caption,
      fontWeight: "600",
    },
    categoryTextActive: {
      color: colors.white,
    },
    categoryTextInactive: {
      color: colors.gray,
    },
    statsContainer: {
      flexDirection: "row",
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    statCard: {
      flex: 1,
      backgroundColor: colors.lightGray,
      padding: spacing.md,
      borderRadius: 8,
    },
    statNumber: {
      ...typography.h3,
      color: colors.secondary,
    },
    statLabel: {
      ...typography.caption,
      color: colors.gray,
      marginTop: spacing.xs,
    },
  });

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Found Items</Text>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search found items..."
        />
      </View>

      <View style={styles.content}>
        <Section title="Filter by Category">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
          >
            {CATEGORIES.map((category) => (
              <Pressable
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category
                    ? styles.categoryButtonActive
                    : styles.categoryButtonInactive,
                ]}
                onPress={() => handleCategorySelect(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category
                      ? styles.categoryTextActive
                      : styles.categoryTextInactive,
                  ]}
                >
                  {category}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </Section>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{allItems.length}</Text>
            <Text style={styles.statLabel}>Total Found</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{filteredItems.length}</Text>
            <Text style={styles.statLabel}>Shown</Text>
          </View>
        </View>

        {filteredItems.length === 0 ? (
          <EmptyState
            title="No found items listed"
            message="Be the first to report a found item!"
            icon="🎯"
          />
        ) : (
          <ItemListView
            items={filteredItems}
            onItemPress={(item) => {
              navigation.navigate("ItemDetail", { item });
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};
