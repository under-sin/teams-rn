import { useState } from "react";
import { FlatList, Text, View } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";

import { s } from "./styles";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("Team A");
  const [players, setPlayers] = useState<string[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <SafeAreaView style={s.container}>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <View style={s.form}>
        <Input placeholder="Digite o nome do jogador" autoCorrect={false} />
        <ButtonIcon iconName="add" />
      </View>

      <View style={s.headerList}>
        <FlatList
          data={["Team A", "Team B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={s.numbersOfPlayers}>{players.length}</Text>
      </View>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => <ListEmpty message="Não há jogadores" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { marginBottom: 50 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" type="remove" />
    </SafeAreaView>
  );
}
