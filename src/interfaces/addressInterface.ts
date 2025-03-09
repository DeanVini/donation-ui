import { array } from 'yup'

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
  people: [object]
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
