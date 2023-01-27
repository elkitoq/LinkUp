import {NextPage} from 'next'

import {HeadingApp} from '@/components/heading-page/headding-page'
import {LayoutApp} from '@/components/layout/layout'

const ProfileIndexPage: NextPage = () => {
  return (
    <LayoutApp title={'Profile'}>
      <HeadingApp title={'Profile'} />
    </LayoutApp>
  )
}

export default ProfileIndexPage
