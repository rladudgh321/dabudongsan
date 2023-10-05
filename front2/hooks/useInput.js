import React, { useCallback, useState } from 'react';

const useIput = (init) => {
    const [value, setter] = useState(init);
    const handler = useCallback((e)=>{
        setter(e.target.value);
    },[value]);
    return [value, handler, setter];
}

export default useIput;