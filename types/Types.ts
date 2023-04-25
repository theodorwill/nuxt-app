// INTERFACES
interface Job {
    title: string,
    location: string,
    salary: number,
    id: string
}

interface Product {
    title: string,
    description: string,
    price: number,
}

// TYPES
type MenuOpen = true | false
type OrderTerm = 'location' | 'title' | 'salary'

export type { MenuOpen, OrderTerm, Job }