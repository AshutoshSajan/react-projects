function uuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

export default function Todo(state = [], action){
	switch (action.type) {
		case "ADD_TODO":
			return [...state, {
				id: uuid(),
				name: action.name,
				isDone: false
			}]
			break;
		case "REMOVE_TODO":
			return state.filter(todo => todo.id !== action.id);
			break;
		case "TOGGLE_TODO":
			return state.map(todo => todo.id == action.id ? {id: todo.id, name: todo.name, isDone: !todo.isDone} : todo)
			break;
		default:
			return state
			break;
	}
}