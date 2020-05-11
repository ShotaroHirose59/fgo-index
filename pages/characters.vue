<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">No.</th>
              <th class="text-left">キャラクター名</th>
              <th class="text-left">攻撃力(Lv.90)</th>
              <th class="text-left">攻撃力(Lv.100)</th>
              <th class="text-left">宝具（色）</th>
              <th class="text-left">レア</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="character in characters" :key="character.id">
              <td>{{ character.number }}</td>
              <td>{{ character.name }}</td>
              <td>
                {{ character.atk ? character.atk[0] : '' }}
              </td>
              <td>
                {{ character.atk ? character.atk[1] : '' }}
              </td>
              <td>{{ character.card }}</td>
              <td>{{ character.rarity }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      number: '',
      name: '',
      atk: [],
      rarity: ''
    }
  },
  computed: {
    characters() {
      return this.$store.getters['characters/orderdCharacters']
    }
  },
  created() {
    this.$store.dispatch('characters/init')
  }
}
</script>

<style scoped>
th {
  width: 350px;
  min-width: 200px;
}
</style>
