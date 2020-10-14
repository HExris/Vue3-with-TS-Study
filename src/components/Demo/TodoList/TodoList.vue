<template>
  <div class="container todo_list">
    <input
      type="text"
      v-model.trim="originTodoItem.title"
      placeholder="What's your plan ?"
      @keyup.enter="addTodoItem"
    />
    <div class="total">{{ showText }}</div>
    <ul>
      <transition-group
        name="fade-out"
        v-for="item in todoState"
        :key="item.hash"
        @click="removeTodoItem(item.hash)"
      >
        <li class="todo_item">
          <div class="title" :class="{ done: item.done }">{{ item.title }}</div>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script lang="ts">
import TodoList from './todoList'

export default TodoList
</script>
<style lang="less" scoped>
@import url('./todoList.less');
</style>