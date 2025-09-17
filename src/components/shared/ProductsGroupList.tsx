'use client'

import React, { RefObject } from 'react'
import { useIntersection } from 'react-use'

import { Title } from '@/components/shared/Title'
import { cn } from '@/lib/utils'
import { ProductCard } from '@/components/shared/ProductCard'
import { useCategoryStore } from '@/store/category'

interface ProductsGroupListProps {
  title: string
  items: any[]
  className?: string
  listClassName?: string
  categoryId: number
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({ title, categoryId, listClassName, items, className } : ProductsGroupListProps) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef<HTMLDivElement>(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
   }, [categoryId, intersection, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size={"lg"} className={"font-extrabold mb-5"}/>

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items
          .map((product: any, index: number) => (
            <ProductCard key={product.id} id={product.id} name={product.name} price={product.items?.[0]?.price} imageUrl={product.imageUrl} />
          ))
        }
      </div>
    </div>
  )
}