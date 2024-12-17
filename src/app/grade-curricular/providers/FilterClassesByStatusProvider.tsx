'use client'

import { createContext, useContext, useState } from 'react'

type FilterContextType = {
  filterByStatus?: number
  setFilterByStatus: (value: number) => void
  filterByCategory?: string
  setFilterByCategory: (value: string) => void
}

const FilterContext = createContext<FilterContextType | null>(null)

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filterByStatus, setFilterByStatus] = useState(0)

  const handlesetFilterByStatus = (value: number) => {
    setFilterByStatus(value)
  }

  const [filterByCategory, setFilterByCategory] = useState<string | undefined>(
    'todas',
  )

  const handleSetFilterByCategory = (value: string) => {
    setFilterByCategory(value)
  }

  return (
    <FilterContext.Provider
      value={{
        filterByStatus,
        setFilterByStatus: handlesetFilterByStatus,
        filterByCategory,
        setFilterByCategory: handleSetFilterByCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)

  if (context == null) {
    throw new Error('useFilter precisa ser usado dentro do FilterProvider')
  }

  return context
}
