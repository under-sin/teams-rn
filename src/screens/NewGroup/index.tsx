import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { UsersThree } from "phosphor-react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { s } from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  const [group, setGroup] = useState<string>("");

  function handlePlayers() {
    navigation.navigate("players", { group });
  }

  return (
    <SafeAreaView style={s.containe}>
      <Header showBackButton />

      <View style={s.content}>
        <UsersThree size={56} style={s.icon} />

        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />

        <View style={{ gap: 20 }}>
          <Input
            placeholder="Nome da turma"
            onChangeText={(text) => setGroup(text)}
          />
          <Button
            title="Criar"
            onPress={handlePlayers}
            disabled={group.length === 0}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
