// INTERFACES
interface Job {
    title: string,
    location: string,
    salary: number,
    id: string
}

interface Product {
    id: string,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

// TYPES
type MenuOpen = true | false
type OrderTerm = 'location' | 'title' | 'salary'
type ProductOrderTerm = 'title' | 'price'

export type { MenuOpen, OrderTerm, Job, Product, ProductOrderTerm }