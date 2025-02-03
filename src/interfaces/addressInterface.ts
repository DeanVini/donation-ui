export interface Address {
  id: number
  street: string
  postalCode: string
  neighborhood: string
  city: string
  state: string
  additionalInfo: string
  number: number
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
