import {useEffect, useRef} from "react";

const usePrevious = (value) => {
    const previousValue = useRef(undefined);

   useEffect(() => {
    previousValue.current = value
   },[value])

    return previousValue.current;

}

export default usePrevious;