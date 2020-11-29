import { useProduct } from './../../../hooks/useProducts'
import Avatar from './../../atoms/avatar/Avatar'
import Title from './../../atoms/title/Title'
import Header from './../../molecules/header/Header'
import Search from './../../molecules/search/Search'
import Grid from './../../organisms/grid/Grid'
import ProductGrid from './../../organisms/product-grid/ProductGrid'
import * as S from './styles'

export default function HomeTemplate() {
  const { products } = useProduct()

  return (
    <Grid>
      <Grid.header>
        <Header>
          <Header.title>
            <Title tag="h1" text="Sneakers" />
          </Header.title>
          <Header.avatar>
            <Avatar src="/img/avatar.png" alt="User avatar image" />
          </Header.avatar>
        </Header>
      </Grid.header>
      <Grid.body>
        <S.Wrapper>
          <Search />
          <ProductGrid products={products} />
        </S.Wrapper>
      </Grid.body>
    </Grid>
  )
}
