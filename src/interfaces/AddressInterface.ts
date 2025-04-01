import type { Family } from '@/interfaces/FamilyInterface'

export interface Address {
  id: number
  street: string
  postalCode: string
  neighborhood: string
  city: string
  state: string
  additionalInfo: string
  number: number
  latitude: number
  longitude: number
  peopleCount: number
  families: Family[]
}

export interface AddressInput {
  street: string
  postalCode: string
  neighborhood: string
  city: string
  state: string
  additionalInfo: string
  number: string
}
