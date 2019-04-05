function uuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export default function Todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state, {
          text: action.text,
          completed: false,
          id: uuid()
        }]
		case REMOVE_TODO:
			return state.filter(todo => todo.id !== action.id)
		case "TOOGLE_TODO":
			return state.map(todo => todo.id === action.id ? 
				{
					text: todo.text,
          completed: !todo.completed,
          id: uuid()
        } : todo
         )
		default:
			return state
	}
}