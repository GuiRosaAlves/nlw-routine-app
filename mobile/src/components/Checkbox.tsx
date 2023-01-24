import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { useState } from "react";

interface CheckboxProps {
  title: string;
  checked?: boolean;
  onCheck?: () => void;
}
export function Checkbox({
  title,
  checked = false,
  onCheck = () => {},
}: CheckboxProps) {
  const [checkedState, setCheckedState] = useState(checked);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      onPress={() => {
        setCheckedState(!checkedState);
        onCheck();
      }}
    >
      {checkedState ? (
        <View className="h-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check" size={20} color={colors.white} />
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      )}
      <Text className="text-white text-base ml-3 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
