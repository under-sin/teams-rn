import { useState } from "react";
import { FlatList, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { s } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export function Group() {
  const [group, setGroup] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNavigationNewGroup() {
    navigation.navigate("new");
  }

  return (
    <SafeAreaView style={s.containe}>
      <Header />

      <Highlight title="Turma" subtitle="Jogue com a sua turma" />

      <FlatList
        data={group}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={group.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma cadastrar :(" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNavigationNewGroup} />
    </SafeAreaView>
  );
}
