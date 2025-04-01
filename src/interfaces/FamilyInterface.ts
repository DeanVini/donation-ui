import type { Service } from '@/interfaces/ServiceInterface'
import type { Person } from '@/interfaces/PersonInterface'

export interface Family {
  id: number
  name: string
  services: Service[]
  members: Person[]
  leader: Person
}
