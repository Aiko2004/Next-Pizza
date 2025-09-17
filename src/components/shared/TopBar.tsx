import React from 'react'
import { Categories } from '@/components/shared/Categories'
import { SortPopup } from '@/components/shared/Sort-popup'
import { cn } from '@/lib/utils'
import { Container } from '@/components/shared/Container'

interface Props {
  className?: string
}

export const TopBar: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10' ,className)}>
      <Container className="flex justify-between">
        <Categories/>
        <SortPopup/>
      </Container>
    </div>
  )
}