import Avatar from '@/components/atoms/avatar/Avatar'
import Title from '@/components/atoms/title/Title'
import Header from '@/components/molecules/header/Header'
import Grid from '@/components/organisms/grid/Grid'
import { useProduct } from '@/hooks/useProducts'

export default function HomeTemplate() {
  const { products } = useProduct()

  return (
    <Grid>
      <Grid.header>
        <Header>
          <Header.title>
            <Title title={'Sneakers'} />
          </Header.title>
          <Header.avatar>
            <Avatar src={'/img/avatar.png'} alt={'User avatar image'} />
          </Header.avatar>
        </Header>
      </Grid.header>
      <Grid.body>{products.length}</Grid.body>
    </Grid>
  )
}
