import { TopBar, Container, Title, Filters, ProductCard } from '@/components/shared'
import React from 'react'
import { ProductsGroupList } from '@/components/shared/ProductsGroupList'

export default function Home() {
  return (
      <>
        <Container className="mt-10">
          <Title text="Все пиццы" size="lg" className="font-extrabold"/>
        </Container>
        <TopBar/>
        <Container className="pb-14 mt-9">
          <div className="flex gap-[60px]">
            <div className="w-[250px]">
              <Filters/>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-16">
                {/*<ProductCard id={0} name={"Чизбургер-пицца"} price={2300} imageUrl={"https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.jpg"}/>*/}
                {/*<ProductCard id={0} name={"Чизбургер-пицца"} price={2300} imageUrl={"https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.jpg"}/>*/}
                <ProductsGroupList title={"Пиццы"} items={[{ id: 0, name: "Чизбургер-пицца", items: [ { price: 2300 } ], imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.jpg" }, { id: 1, name: "Чизбургер-пицца", items: [ { price: 2300 } ], imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.jpg" }]} categoryId={1}/>
              </div>
            </div>
          </div>
        </Container>
      </>
  )
}
