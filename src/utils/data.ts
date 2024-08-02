import { IPayments, IUser } from '../types'

export const listUsers: IUser[] = [
  {
    name: 'John',
    lastName: 'Doe',
    email: 'correo@correo.com',
  },
  {
    name: 'Jane',
    lastName: 'Doe',
    email: 'correo@correo.com',
  },
]

export const listPayments: IPayments[] = [
  {
    amount: 100,
    quantity: 1,
  },
  {
    amount: 200,
    quantity: 2,
  },
]
