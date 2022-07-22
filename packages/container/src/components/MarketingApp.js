import { mount } from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            onNavigate: (location) => {
                const {pathname} = history.location;
                if (location && pathname !== location.pathname) {
                    history.push(location.pathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, [])

    return <div ref={ref}></div>

}