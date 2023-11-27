import { useEffect } from 'react'

function useCustom(count) {

    useEffect(()=>{
        console.log('Hello')
        if(count >= 0){
            document.title = `Chats (${count})`
        }else{
            document.title = `Chats`
        }
    }, [count])
}

export default useCustom
