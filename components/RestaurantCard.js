import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-4 rounded shadow-lg">
      <Image source={{ uri: imgUrl }} className="h-40 w-64 rounded" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-base pt-2">{title}</Text>
        <View className="flex-row items-center">
          <StarIcon color="orange" size={22} opacity={0.4} />
          <Text className="text-gray-500 text-xs mx-1">
            <Text className="text-orange-300">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center">
          <MapPinIcon color="#FD7F20" size={22} opacity={0.4} />
          <Text className="text-gray-500 text-xs mx-1">Terdekat. {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
