import Avatar from '@/components/atoms/avatar/Avatar'
import Title from '@/components/atoms/title/Title'
import Header from '@/components/molecules/header/Header'
import Seaarch from '@/components/molecules/search/Search'
import Grid from '@/components/organisms/grid/Grid'
import ProductGrid from '@/components/organisms/product-grid/ProductGrid'
import { useProduct } from '@/hooks/useProducts'

export default function HomeTemplate() {
  const { products } = useProduct()

  return (
    <Grid>
      <Grid.header>
        <Header>
          <Header.title>
            <Title title="Sneakers" />
          </Header.title>
          <Header.avatar>
            <Avatar src="/img/avatar.png" alt="User avatar image" />
          </Header.avatar>
        </Header>
      </Grid.header>
      <Grid.body>
        <Seaarch />
        <ProductGrid products={products} />
      </Grid.body>
    </Grid>
  )
}
