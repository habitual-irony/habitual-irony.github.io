import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CSpinner } from '@coreui/react'
import { Login, LoginCallback } from './index';
import PrivateRouter from './PrivateRouter';

function AppRouters() {
    return (
        <Suspense
            fallback={
                <div className="pt-3 text-center">
                    <CSpinner color="primary" variant="grow" />
                </div>
            }
        >
            <Routes>
                <Route path='/lethe/*' element={<PrivateRouter/>}/>
                <Route exact path='/login/callBack' element={<LoginCallback/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route path="/*" element={<Login />} />
            </Routes>
        </Suspense>
    );
}

export default AppRouters;
