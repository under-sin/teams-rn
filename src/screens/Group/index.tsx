import { useState } from "react";
import { FlatList, View } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { s } from "./styles";

export function Group() {
  const [group, setGroup] = useState<string[]>([]);

  return (
    <View style={s.containe}>
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

      <Button title="Criar nova turma" />
    </View>
  );
}
