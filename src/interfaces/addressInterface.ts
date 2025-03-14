import type { FamilyInterface } from '@/interfaces/familyInterface'
import { list } from 'postcss'

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
  families: any
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
