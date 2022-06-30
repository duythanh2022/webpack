import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/operator/layouts/Layout'

const Home = lazy(() => import('@/operator/pages/Home'))

const renderPageWithLayout = (children: JSX.Element) => (
  <Layout>{children}</Layout>
)

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={renderPageWithLayout(<Home />)} />
      <Route path='abc' element={renderPageWithLayout(<h1>abc</h1>)} />
      <Route path='*' element={<Navigate to='/not-found' />} />
    </Routes>
  )
}

export default MainRoutes
