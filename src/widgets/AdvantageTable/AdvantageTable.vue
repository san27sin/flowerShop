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
      <td v-if="!advantage.bEdited">{{ advantage.description }}</td>
      <td v-if="advantage.bEdited">
        <input v-model="advantage.title">
      </td>
      <td v-if="advantage.bEdited">
        <input v-model="advantage.description">
      </td>
      <td>
        <error-list v-if="advantage.bEdited" :err-messages="errMessages"/>
      </td>
      <td>
        <div class="buttons">
          <button v-if="!advantage.bEdited" class="edit" @click="advantageStore.editAdvantageMode(index)">
            <img src="@/assets/deleteButton.svg" alt="">
          </button>
          <button v-else class="edit" @click="submitValidateForm(index, advantage)">
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
import {IAdvantageSend, useAdvantageStore} from "@/features/advantage/advantagiesStore";
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue";
import {ref} from "vue";
import {Types, Validation} from "@/shared/validation";

const advantageStore = useAdvantageStore();
advantageStore.getAll()

const errMessages = ref<string[]>([]);
const submitValidateForm = (index: number, advantage: IAdvantageSend) => {
  errMessages.value.splice(0,errMessages.value.length);
  const validation = new Validation([
    {type: Types.title, value: advantage.title},
    {type: Types.desc, value: advantage.description},
  ]);

  errMessages.value = validation.validate();

  if (!!errMessages.value.length) {
    return;
  }
  advantageStore.commitAdvantageMode(index);
}
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