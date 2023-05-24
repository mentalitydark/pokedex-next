import { ReactQueryProvider } from '@/providers/react-query'
import { Home } from '@/templates/Home'

const Page = () => (
  <ReactQueryProvider>
    <Home />
  </ReactQueryProvider>
)

export default Page
