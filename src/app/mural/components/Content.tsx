'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { carouselItens } from './carouselItens'

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
                  width={0}
                  height={0}
                  sizes="100svh"
                  className="w-full h-[calc(100svh-100px)] object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  )
}
