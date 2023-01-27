import {NextPage} from 'next'

import {HeadingApp} from '@/components/heading-page/headding-page'
import {LayoutApp} from '@/components/layout/layout'

const IndexPage: NextPage = () => {
  return (
    <LayoutApp title={'Home'}>
      <HeadingApp title={'Home'} />
    </LayoutApp>
  )
}

export default IndexPage
