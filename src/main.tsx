import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/sass/_reset.scss'
import '@/sass/_global.scss'
import { RecoilRoot } from 'recoil'
import AppRoutes from '@/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <AppRoutes />
        </RecoilRoot>
    </React.StrictMode>
)
