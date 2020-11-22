import HomeTemplate from '@/components/templates/Home/HomeTemplate'
import Store from '@/store/Store'

export default function Home() {
  return (
    <Store>
      <HomeTemplate />
    </Store>
  )
}
