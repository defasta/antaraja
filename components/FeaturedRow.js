import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, desc }) => {
  return (
    <View>
      <View className="flex-row pt-4 px-5 justify-between items-center">
        <Text className="font-bold text-base">{title}</Text>
        <ArrowRightIcon color="#FD7F20" />
      </View>

      <Text className="text-xs px-5 text-gray-500">{desc}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
          title="Bakso Enak Sekali"
          rating={4.9}
          genre="Hidangan Berkuah"
          address="Jl. Garuda 198b"
          short_desc="Bakso mantap enak rasanya"
          dishes={[]}
          long={20}
          lat={10}
        />

        <RestaurantCard
          id={123}
          imgUrl="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
          title="Bakso Enak Sekali"
          rating={4.9}
          genre="Hidangan Berkuah"
          address="Jl. Garuda 198b"
          short_desc="Bakso mantap enak rasanya"
          dishes={[]}
          long={20}
          lat={10}
        />

        <RestaurantCard
          id={123}
          imgUrl="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
          title="Bakso Enak Sekali"
          rating={4.9}
          genre="Hidangan Berkuah"
          address="Jl. Garuda 198b"
          short_desc="Bakso mantap enak rasanya"
          dishes={[]}
          long={20}
          lat={10}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
