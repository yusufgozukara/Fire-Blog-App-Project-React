
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import app from './firebase'


export const AddBlog = (info) => {

    const db = getDatabase(app);
    const userRef= ref(db,'users/')
    const newUserRef=push(userRef)
    set(newUserRef,{
      title:info.title,
      image:info.image,
      content:info.content
    })
  
  }

  export const useFetch = () => {
    const [isLoading, setIsLoading] = useState();
    const [blogList, setBlogList] = useState();

    useEffect(() => {
      const db = getDatabase(app);
      const userRef= ref(db,'users/')
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const userArray=[]

        for (let id in data){
            userArray.push({id,...data[id]})
        }
        setBlogList(userArray);
        setIsLoading(false);
    })
    
  }, [])
  return {isLoading, blogList}

}