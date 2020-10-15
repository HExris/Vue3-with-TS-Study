<template>
  <!-- Input Test -->
  <Container title="Input Test">
    <InputDemo />
  </Container>

  <!-- Todo List -->
  <Container title="Todo List">
    <TodoList />
  </Container>
  <!-- Shopping cart -->
  <Container title="Todo List">
    <ShoppingCart/>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "./container.vue";
import InputDemo from "./InputDemo.vue";
import TodoList from "./TodoList/TodoList.vue";
import ShoppingCart from "./ShoppingCart/ShoppingCart.vue";

export default defineComponent({
  name: "Input",
  props: {
    msg: String,
  },
  components: {
    Container,
    InputDemo,
    TodoList,
    ShoppingCart
  },
});
</script>