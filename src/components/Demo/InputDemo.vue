<template>
  <div class="calculator">
    <input v-model.number="inputState.inputValue1" />
    <span class="icon">+</span>
    <input v-model.number="inputState.inputValue2" />
  </div>
  <div class="result">
    <span class="icon">=</span>
    <div class="result_number">{{ outterResult }}</div>
  </div>
</template>

<script lang="ts">
import { reactive, computed } from "vue";
interface Input {
  inputValue1: number;
  inputValue2: number;
  result?: number;
}
export default {
  setup() {
    // Calculator
    const inputState = reactive<Input>({
      inputValue1: 0,
      inputValue2: 0,
      result: 0,
    });

    // Get sum of array
    const getSum = (...inputValue: number[]): number => {
      return inputValue.reduce((firstNum, restNum): number => {
        return firstNum + restNum;
      }, 0);
    };

    const outterResult = computed(() => {
      inputState.result = getSum(
        inputState.inputValue1,
        inputState.inputValue2
      );
      return inputState.result;
    });

    return {
      inputState,
      outterResult,
    };
  },
};
</script>

<style lang="less" scoped>
.calculator {
  display: flex;
  align-items: center;
}
span.icon {
  font-size: 18px;
  margin: 10px;
}
.result {
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  color: #535353;
  span.icon {
    margin-left: 0;
  }
  .result_number {
    font-size: 26px;
  }
  .block_title {
    display: none;
  }
}
</style>