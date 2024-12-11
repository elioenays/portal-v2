'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const carouselItens = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1733921555760-b905f7eb213d',
    name: 'Planet volumes',
  },
  {
    url: 'https://images.unsplash.com/photo-1733398378174-a8f3b1559451',
    name: 'Pascal Debruner',
  },
  {
    url: 'https://images.unsplash.com/photo-1733714954006-04558605f822',
    name: 'Bundo kim',
  },
  {
    url: 'https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9',
    name: 'Samsung Memory',
  },
]

export function MuralContent() {
  return (
    <Card>
      <CardContent>
        <Carousel
          opts={{ align: 'center', loop: true }}
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full"
        >
          <CarouselContent>
            {carouselItens.map((carouselItem) => (
              <CarouselItem key={carouselItem.name} title={carouselItem.name}>
                <Image
                  src={carouselItem.url}
                  alt={carouselItem.name}
                  width={520}
                  height={480}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  )
}
