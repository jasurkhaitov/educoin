import { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import { Route, Routes } from 'react-router-dom'
import BrowsePage from './page/BrowsePage'
import AuthFlowPage from './page/AuthFlowPage'
import RegisterPage from './page/RegisterPage'
import DashboardPage from './page/DashboardPage'

function App() {
	useEffect(() => {
		WebApp.ready()

		document.body.style.backgroundColor = WebApp.backgroundColor
		document.body.style.color =
			WebApp.colorScheme === 'dark' ? 'white' : 'black'
	}, [])

	return (
		<div className='font-rounded'>
			<Routes>
				<Route path='/' element={<BrowsePage />} />
				<Route path='/auth-flow' element={<AuthFlowPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/dashboard' element={<DashboardPage />} />
			</Routes>
		</div>
	)
}

export default App
