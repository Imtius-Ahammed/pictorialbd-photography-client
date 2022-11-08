import { useEffect } from "react"

const useTitle = title =>{
  useEffect(()=>{
    document.title =`${title} - PictorialBD`;
  },[title])
};
export default useTitle;