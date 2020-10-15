import { reactive, computed } from "vue";

interface TodoItem {
  title: string;
  hash: string;
  done: boolean;
  description?: string;
  remindDate?: Date;
}

const TodoList = {
  setup() {
    // Todo
    const todoState: TodoItem[] = reactive([]);
    const originTodoItem: TodoItem = reactive({
      title: "",
      hash: Math.random()
        .toString(36)
        .substr(2),
      done: false,
    });
    // Init data
    const getTodoList = (): TodoItem[] => {
      const localData = localStorage.getItem("todoList");
      if (localData) {
        return JSON.parse(localData || "[]");
      } else {
        return [];
      }
    };
    const localList: TodoItem[] = getTodoList();
    localList.length && localList.map((v) => todoState.push(v));
    
    const showList = computed((): TodoItem[] => {
      return todoState.filter((v) => !v.done);
    });
    const showText = computed((): string => {
      const text: string = showList.value.length
        ? `我还有${showList.value.length}件事儿没做呢`
        : "无事一身轻哦~~";
      return text;
    });

    const initTodoItem = (): void => {
      originTodoItem.title = "";
      originTodoItem.description = "";
      originTodoItem.done = false;
      originTodoItem.hash = Math.random()
        .toString(36)
        .substr(2);
    };

    const saveTodoList = (todoState: TodoItem[]): void => {
      localStorage.setItem("todoList", JSON.stringify(todoState));
    };

    const addTodoItem = (): void => {
      if (!originTodoItem.title) return;
      // Update remind date
      originTodoItem.remindDate = new Date();
      // Add todo item
      todoState.push(Object.assign({}, originTodoItem));
      // Save to local storage
      saveTodoList(todoState);
      // Reset origin todo item
      initTodoItem();
    };

    const removeTodoItem = (hash: string) => {
      // Get record index
      const index = todoState.findIndex((v) => v.hash === hash);
      // Save to local storage
      saveTodoList(todoState);
      if (todoState[index].done) {
        todoState.splice(index, 1);
      } else {
        todoState[index].done = true;
      }
    };

    return {
      // Todo
      originTodoItem,
      todoState,
      showList,
      showText,
      addTodoItem,
      removeTodoItem,
    };
  },
};
export default TodoList;
