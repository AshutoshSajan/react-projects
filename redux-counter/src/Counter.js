const INC = "INC";
const DEC = "DEC";
const RESET = "RESET";

export default function counter( state = 0, action){
	console.log(state, action, "called in counter");
	switch (action.type) {
		case INC:
			return state += 1;
			break;
		case DEC:
			return state -= 1;
			break;
		case RESET:
		  return 0
			break;
		default:
			return state
			break;
	}
}