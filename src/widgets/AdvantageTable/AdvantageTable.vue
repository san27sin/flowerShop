<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Преимущества</th>
      <th scope="col">Описание</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(advantage, index) of advantageStore.advantages" :key="advantage">
      <th scope="row">{{ index + 1 }}</th>
      <td v-if="!advantage.bEdited">{{advantage.title}}</td>
      <td v-if="!advantage.bEdited">{{advantage.desc}}</td>
      <td v-if="advantage.bEdited">
        <input v-model="advantage.title">
      </td>
      <td v-if="advantage.bEdited">
        <input v-model="advantage.desc">
      </td>
      <td>
        <div class="buttons">
          <button v-if="!advantage.bEdited" class="edit" @click="advantageStore.editAdvantageMode(index)">
            <img src="@/assets/deleteButton.svg" alt="">
          </button>
          <button v-else class="edit" @click="advantageStore.commitAdvantageMode(index)">
            <img src="@/assets/deleteButton.svg" alt="">
          </button>
          <button class="delete" @click="advantageStore.deleteAdvantage(index)">Х</button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useAdvantageStore } from "@/features/advantage/advantageStore";

const advantageStore = useAdvantageStore();
</script>

<style scoped lang="scss">
.edit {
  width: 37px;
  height: 37px;
  border: none;
  background: #FFFFFF;
}

.delete {
  width: 37px;
  height: 37px;
  border: none;
  border-radius: 12px;
  background: #E00;
}

.align__right {
  text-align: right;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
</style>