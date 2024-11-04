import { View } from "react-native";
import { UsersThree } from "phosphor-react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { s } from "./styles";

export function NewGroup() {
  return (
    <View style={s.containe}>
      <Header showBackButton />

      <View style={s.content}>
        <UsersThree size={56} style={s.icon} />

        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />

        <View style={{ gap: 20 }}>
          <Input placeholder="Nome da turma" />
          <Button title="Criar" />
        </View>
      </View>
    </View>
  );
}
