import React, { useState, useEffect } from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const getDateTime = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return (() => clearInterval(getDateTime))
    }, []);

    const today = new Date();
    const getToday = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    return (
        <CFooter className="px-4">
          <div className="ms-auto">
              <span className="ms-1" style={{'fontFamily': 'NeoDunggeunmoPro-Regular'}}>{getToday} {time.toLocaleTimeString()}</span>
          </div>
        </CFooter>
    )
}

export default AppFooter
