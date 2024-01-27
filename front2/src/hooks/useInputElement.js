import { useCallback, useState } from 'react';

const useInputElement = (init) => {
    const [value, setter] = useState(init);
    const handler = useCallback((e)=>{
        setter(e);
    },[value]);
    return [value, handler, setter];
}

export default useInputElement;