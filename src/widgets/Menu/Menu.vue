<template>
  <nav class="menu">
    <router-link v-for="link in links" :key="link.name" :to="link.path" class="link">{{ link.name }}</router-link>
  </nav>
</template>

<script setup lang="ts">
import SecondaryButton from "@/shared/ui/SecondaryButton/SecondaryButton.vue";

const links = [ // стоит ли создавать класс
  {
    name: "Категории",
    path: "/categories"
  },
  {
    name: "Преимущества",
    path: "/advantage"
  },
  {
    name: "Контакты",
    path: "/contacts"
  },
  // {
  //   name: "Подписки",
  //   path: ""
  // },
  // {
  //   name: "Новости",
  //   path: ""
  // },
  // {
  //   name: "Заявки",
  //   path: ""
  // },
  // {
  //   name: "Вопросы/ответы",
  //   path: ""
  // },
  // {
  //   name: "Клиенты",
  //   path: ""
  // },
  // {
  //   name: "Отзывы",
  //   path: ""
  // },
  // {
  //   name: "Заказы",
  //   path: ""
  // },
  // {
  //   name: "Черный список",
  //   path: ""
  // }
]
</script>

<style scoped lang="scss">
  .menu {
    display: flex; /* добавляется родителю */
    flex-direction: column;
    justify-content: flex-start;
    background: linear-gradient(94deg, rgba(4,4,26,1) 0%, rgba(21,22,77,1) 100%);
  }

  .link {
    border: 1px solid #595959; /* Толщина рамки в пикселах,
                           тип границы (в данном случае сплошная линия) и
                           цвет линии */
    padding: 5px; /* Расстояние от текста до рамки */
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    /*letter-spacing: 0em;*/
    text-align: left;
  }
</style>