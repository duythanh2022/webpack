import Layout from '@/customer/layouts/Layout'

export const renderPageWithLayout = (children: JSX.Element) => (
  <Layout>{children}</Layout>
)
