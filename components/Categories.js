import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 5 }}
    >
      <CategoryCard
        url="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
        title="Bakso"
      />
        <CategoryCard
        url="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
        title="category 1"
      />
        <CategoryCard
        url="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
        title="category 1"
      />
        <CategoryCard
        url="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
        title="category 1"
      />
        <CategoryCard
        url="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
        title="category 1"
      />
        <CategoryCard
        url="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
        title="category 1"
      />
    </ScrollView>
  );
};

export default Categories;
