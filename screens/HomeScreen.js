import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-2">

      {/* Header */}
      <View className="flex-row items-center space-x-3 mx-5 pb-3">
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais",
          }}
          className="h-8, w-8 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-500 text-xs">
            Antar Sekarang!
          </Text>
          <View className="flex-row items-center space-x-1">
            <Text className="font-bold text-gray-800 text-lg">
              Lokasi Saat Ini
            </Text>
            <ChevronDownIcon size={20} color="#FD7F20" />
          </View>
        </View>
        <UserIcon size={35} color="#FD7F20" />
      </View>

      {/* Search bar */}
      <View className="flex-row mx-5 space-x-1 pb-3 items-center">
        <View className="flex-row flex-1 bg-gray-200 space-x-1 items-center pt-2 pb-2 rounded-b-md rounded-t-md">
          <View className="mx-3">
            <MagnifyingGlassIcon size={20} color="#BBBBBB" />
          </View>
          <TextInput placeholder="Cari tempat makan" keyboardType="default" />
        </View>
        <AdjustmentsHorizontalIcon size={30} color="#FD7F20" />
      </View>

      {/* Content */}
      <ScrollView className="bg-gray-100 pt-2" contentContainerStyle={{paddingBottom: 130}}>
        <Categories />
        <FeaturedRow id="0" title="Rekomendasi Makanan" desc="Temukan makanan kesukaan Anda!" />
        <FeaturedRow id="0" title="Terdekat" desc="Makanan terdekat disekitar Anda" />
        <FeaturedRow id="0" title="Dikson Besar!" desc="Pilihan makanan dengan diskon melimpah!" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
