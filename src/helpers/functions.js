
import { getDatabase, ref, push, set } from "firebase/database";
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