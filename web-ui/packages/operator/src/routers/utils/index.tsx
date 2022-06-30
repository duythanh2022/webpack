import PageLayout from '@/operator/layouts/Layout'

export const renderPageWithLayout = (children: JSX.Element) => (
  <PageLayout>{children}</PageLayout>
)
