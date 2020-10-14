<template>
  <div class="home">
    <Demo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from '@/components/Demo/index.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Demo
  },
});
</script>
