function list(
	state={
		loading:true,
		data:[]
	},action){
	switch(action.type){
		case "LIST_UPDATE":
			return {
				loading:true,
				data:state.data
			}
		case "LIST_UPDATE_SUCCESS":
			return {
				loading:false,
				data:action.data.data
			}
		case "LIST_UPDATE_ERROR":
			return {
				loading:false,
				data:[]
			}
		default: return state;
	}
}

export default list;