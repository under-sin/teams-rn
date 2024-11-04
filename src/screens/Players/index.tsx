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

export function Players() {
  const [team, setTeam] = useState("Team A");
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <View style={s.container}>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

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
    </View>
  );
}
