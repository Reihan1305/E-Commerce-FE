// import { useEffect } from "react";
// import { useAppDispatch,useAppSelector } from "../../../store";
// import { getStoreLoginAsync } from "../../../store/async/storeLoginAsync";

// export const getStore = async () =>{
//     const store = useAppSelector((state)=>state.storeLogin.store)
//     const dispatch = useAppDispatch()

//     useEffect(()=>{
//         dispatch(getStoreLoginAsync())
//     },[])
    
//     console.log(store)

//     return store
// }