
import { getDatabase, ref, push, set, onValue, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import app from './firebase'
import {Toastify} from './toastify'


export const AddBlog = (info) => {

    const db = getDatabase(app);
    const userRef= ref(db,'users/')
    const newUserRef=push(userRef)
    set(newUserRef,{
      title:info.title,
      image:info.image,
      content:info.content,
      comment:info.comment,
      like:info.like,
      author:info.author,
      date:info.date
    })
    Toastify('Blog eklendi...')
  }

  export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogList, setBlogList] = useState();

    useEffect(() => {
      try {
              const db = getDatabase(app);
      const userRef= ref(db,'users/')
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const userArray=[]
          // console.log(data)
        for (let id in data){
            userArray.push({id,...data[id]})
        }
        setBlogList(userArray);
        setIsLoading(false);
        // console.log(blogList)
    })
      } catch (error) {
        console.log(error)
      }

    
  }, [])
  return {isLoading, blogList}

}

export const blogDelete = (id) => {
  const db = getDatabase(app);
  remove(ref(db,"users/"+id));
  Toastify('Blog silindi...')
}

export const UpdateBlogFunc = (info) => {
  const db = getDatabase(app);
  const updates = {}
  updates['/users/' + info.id] = info;
  console.log(info)

  return update(ref(db), updates);
}