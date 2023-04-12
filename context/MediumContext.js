import { collection, getDocs, setDoc, doc } from "firebase/firestore"
import { createContext, useEffect, useState} from "react"
import { db } from "../firebase"

const MediumContext = createContext()

const MediumProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "Users"))
            setUsers(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            }))
        }

        getUsers()
    }, [])

    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "posts"))
            setPosts(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        blogHeader: doc.data().blogHeader,
                        blogBody: doc.data().blogBody,
                        description: doc.data().description,
                        timestamp: doc.data().timestamp
                    }
                }
            }))
        }

        getPosts()
    }, [])

    return(
        <MediumContext.Provider value={{posts, users}} >{children}</MediumContext.Provider>
    )
}




export {MediumContext, MediumProvider}