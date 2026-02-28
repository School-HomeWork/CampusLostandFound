import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { colors, spacing, typography, borderRadius } from "../theme";
import { Button, Section } from "../components/UI";

export const PostItemScreen = () => {
  const [itemType, setItemType] = useState<"lost" | "found" | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Electronics",
    "Bags",
    "Clothing",
    "Accessories",
    "Documents",
    "Jewelry",
    "Other",
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.lg,
      paddingBottom: spacing.md,
      backgroundColor: colors.accent,
    },
    headerTitle: {
      ...typography.h2,
      color: colors.white,
    },
    content: {
      flex: 1,
      padding: spacing.lg,
    },
    typeSelector: {
      flexDirection: "row",
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    typeButton: {
      flex: 1,
      paddingVertical: spacing.lg,
      borderRadius: borderRadius.lg,
      alignItems: "center",
      borderWidth: 2,
    },
    typeButtonActive: {
      borderColor: colors.accent,
      backgroundColor: colors.accent,
    },
    typeButtonInactive: {
      borderColor: colors.border,
      backgroundColor: colors.lightGray,
    },
    typeButtonText: {
      ...typography.body,
      fontWeight: "600",
    },
    typeButtonTextActive: {
      color: colors.white,
    },
    typeButtonTextInactive: {
      color: colors.gray,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: borderRadius.lg,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
      marginBottom: spacing.md,
      ...typography.body,
      color: colors.dark,
    },
    label: {
      ...typography.body,
      fontWeight: "600",
      color: colors.dark,
      marginBottom: spacing.sm,
    },
    categoryContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.sm,
      marginBottom: spacing.lg,
    },
    categoryButton: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borderRadius.full,
      borderWidth: 1,
    },
    categoryButtonActive: {
      borderColor: colors.accent,
      backgroundColor: colors.accent,
    },
    categoryButtonInactive: {
      borderColor: colors.border,
      backgroundColor: colors.lightGray,
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
    submitButton: {
      marginTop: spacing.lg,
    },
    infoBox: {
      backgroundColor: colors.lightGray,
      padding: spacing.md,
      borderRadius: borderRadius.lg,
      marginBottom: spacing.lg,
    },
    infoText: {
      ...typography.bodySmall,
      color: colors.gray,
    },
    requiredMarker: {
      color: colors.danger,
    },
  });

  const handleSubmit = () => {
    if (!itemType) {
      Alert.alert("Error", "Please select Lost or Found item");
      return;
    }
    if (!title.trim()) {
      Alert.alert("Error", "Please enter item title");
      return;
    }
    if (!category) {
      Alert.alert("Error", "Please select a category");
      return;
    }
    if (!location.trim()) {
      Alert.alert("Error", "Please enter location");
      return;
    }
    if (!contactName.trim() || !contactEmail.trim() || !contactPhone.trim()) {
      Alert.alert("Error", "Please fill in all contact information");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      Alert.alert(
        "Success",
        "Your item has been posted! Thank you for helping the community.",
        [
          {
            text: "OK",
            onPress: () => {
              setItemType(null);
              setTitle("");
              setDescription("");
              setCategory("");
              setLocation("");
              setContactName("");
              setContactEmail("");
              setContactPhone("");
              setIsSubmitting(false);
            },
          },
        ],
      );
    }, 1000);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Report an Item</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            📢 Help your community! Post about lost or found items on campus.
          </Text>
        </View>

        <Section title="Item Type">
          <View style={styles.typeSelector}>
            <Pressable
              style={[
                styles.typeButton,
                itemType === "lost"
                  ? styles.typeButtonActive
                  : styles.typeButtonInactive,
              ]}
              onPress={() => setItemType("lost")}
            >
              <Text
                style={[
                  styles.typeButtonText,
                  itemType === "lost"
                    ? styles.typeButtonTextActive
                    : styles.typeButtonTextInactive,
                ]}
              >
                ❌ Lost
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.typeButton,
                itemType === "found"
                  ? styles.typeButtonActive
                  : styles.typeButtonInactive,
              ]}
              onPress={() => setItemType("found")}
            >
              <Text
                style={[
                  styles.typeButtonText,
                  itemType === "found"
                    ? styles.typeButtonTextActive
                    : styles.typeButtonTextInactive,
                ]}
              >
                ✅ Found
              </Text>
            </Pressable>
          </View>
        </Section>

        <Section title="Item Details">
          <Text style={styles.label}>
            Title <Text style={styles.requiredMarker}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Silver AirPods Pro"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor={colors.gray}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, { minHeight: 100, textAlignVertical: "top" }]}
            placeholder="Provide details about the item..."
            value={description}
            onChangeText={setDescription}
            multiline
            placeholderTextColor={colors.gray}
          />

          <Text style={styles.label}>
            Category <Text style={styles.requiredMarker}>*</Text>
          </Text>
          <View style={styles.categoryContainer}>
            {categories.map((cat) => (
              <Pressable
                key={cat}
                style={[
                  styles.categoryButton,
                  category === cat
                    ? styles.categoryButtonActive
                    : styles.categoryButtonInactive,
                ]}
                onPress={() => setCategory(cat)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    category === cat
                      ? styles.categoryTextActive
                      : styles.categoryTextInactive,
                  ]}
                >
                  {cat}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.label}>
            Location <Text style={styles.requiredMarker}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Central Library - 3rd Floor"
            value={location}
            onChangeText={setLocation}
            placeholderTextColor={colors.gray}
          />
        </Section>

        <Section title="Contact Information">
          <Text style={styles.label}>
            Your Name <Text style={styles.requiredMarker}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={contactName}
            onChangeText={setContactName}
            placeholderTextColor={colors.gray}
          />

          <Text style={styles.label}>
            Email <Text style={styles.requiredMarker}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="your.email@university.edu"
            value={contactEmail}
            onChangeText={setContactEmail}
            keyboardType="email-address"
            placeholderTextColor={colors.gray}
          />

          <Text style={styles.label}>
            Phone <Text style={styles.requiredMarker}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="+1-555-0000"
            value={contactPhone}
            onChangeText={setContactPhone}
            keyboardType="phone-pad"
            placeholderTextColor={colors.gray}
          />
        </Section>

        <View style={styles.submitButton}>
          <Button
            title={isSubmitting ? "⏳ Posting..." : "📤 Post Item"}
            onPress={handleSubmit}
            disabled={isSubmitting}
          />
        </View>
      </View>
    </ScrollView>
  );
};
