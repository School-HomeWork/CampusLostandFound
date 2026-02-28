import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { colors, spacing, typography } from '../theme';
import { getMockItems, searchItems, filterByCategory, CATEGORIES } from '../data/mockData';
import { SearchBar, Section, EmptyState } from '../components/UI';
import { ItemListView } from '../components/ItemCard';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export const LostItemsScreen = () => {
  const navigation = useNavigation<NavProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allItems = getMockItems('lost');
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
      backgroundColor: colors.primary,
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
      flexDirection: 'row',
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
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    categoryButtonInactive: {
      backgroundColor: colors.lightGray,
      borderColor: colors.border,
    },
    categoryText: {
      ...typography.caption,
      fontWeight: '600',
    },
    categoryTextActive: {
      color: colors.white,
    },
    categoryTextInactive: {
      color: colors.gray,
    },
    statsContainer: {
      flexDirection: 'row',
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
      color: colors.primary,
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
        <Text style={styles.headerTitle}>Lost Items</Text>
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search lost items..."
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
            <Text style={styles.statLabel}>Total Lost</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{filteredItems.length}</Text>
            <Text style={styles.statLabel}>Shown</Text>
          </View>
        </View>

        {filteredItems.length === 0 ? (
          <EmptyState
            title="No lost items found"
            message="Try adjusting your search or category filters"
            icon="🔍"
          />
        ) : (
          <ItemListView 
            items={filteredItems}
            onItemPress={(item) => {
              navigation.navigate('ItemDetail', { item });
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};
