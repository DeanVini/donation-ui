import type { Address } from '@/interfaces/AddressInterface'
import type { Family } from '@/interfaces/FamilyInterface'

export interface Person {
  id: number
  name: string
  cpf: string
  telephone: string
  dateOfBirth: string
  address: Address
  family: Family
}
