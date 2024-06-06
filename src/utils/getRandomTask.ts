import type { TaskData } from "@/data/types";

function getRandomTask(arr: TaskData[]): TaskData {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default getRandomTask;
