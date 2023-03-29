
import { useEffect, useState } from "react"

export const useDebounce = (value, tm) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            setDebounceValue(value)
        }, tm)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [tm, value])

    return debounceValue;
}