import { useEffect, useState } from "react";



const useAsync = (asyncFunction) => {

    const [value, setValue] = useState({
        state: 'idle',
        value: null,
        error: null,
    });

    const fetch = () => {
        setValue({
            state: 'pending',
            value: null,
            error: null
        })

        return asyncFunction().then((result) => {
            setValue({
                state: 'success',
                value: result,
                error: null
            })
        }).catch((error) => {
            setValue({
                state: 'error',
                value: null,
                error: error
            })
        })
    }


    useEffect(() => {
        fetch()
    }, [])
    return value

}

export default useAsync;