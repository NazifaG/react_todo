export function uniqueRandomID(todos) {
  const limit = 1000;
  const todoIDs = todos.map((todo) => todo.id);

  let randomID = Math.floor(Math.random() * limit);

  while (todoIDs.includes(randomID)) {
    randomID = Math.floor(Math.random() * limit);
  }
  return randomID;
}
