import React, { useRef, useEffect } from "react"
import {mount} from 'auth/AuthApp';
import { useHistory } from "react-router-dom";

export default () => {

    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: (location) => {
                const {pathname} = history.location;
                
                if (location && location.pathname !== pathname) {
                    history.push(location.pathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, [])

    return <div ref={ref}></div>

}