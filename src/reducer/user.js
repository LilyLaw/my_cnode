function user(
	state={
		loading:true,
		data:{
			create_at:"",
			avatar_url:""
		}
	},action){
	switch(action.type){
		case "USER_UPDATE":
			return {
				loading:true,
				data:state.data
			}
		case "USER_UPDATE_SUCCESS":
			return {
				loading:false,
				data:action.data.data
			}
		case "USER_UPDATE_ERROR":
			return {
				loading:false,
				data:{
					create_at:"",
					avatar_url:""
				}
			}
		default: return state;
	}
}

export default user;