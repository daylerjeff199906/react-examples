/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { createContext, useContext, useState } from 'react'
import { IPayments, IUser } from '../types'

export const BoletaContext = createContext<{
  handleUserClick: (user: IUser) => void
  handlePaymentClick: (payment: IPayments) => void
  userSelected: IUser | null
  paymentSelected: IPayments | null
  total: number
}>({
  handleUserClick: () => {},
  handlePaymentClick: () => {},
  userSelected: null,
  paymentSelected: null,
  total: 0,
})

export const BoletaProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSelected, setUserSelected] = useState<IUser | null>(null)
  const [paymentSelected, setPaymentSelected] = useState<IPayments | null>(null)
  const [total, setTotal] = useState<number>(0)

  function handleUserClick(user: IUser) {
    setUserSelected(user)
  }

  function handlePaymentClick(payment: IPayments) {
    totalPayment(payment.amount, payment.quantity)
    setPaymentSelected(payment)
  }

  function totalPayment(value1: number, value2: number) {
    const total = value1 * value2
    setTotal(total)
  }

  return (
    <BoletaContext.Provider
      value={{
        handleUserClick,
        handlePaymentClick,
        userSelected,
        paymentSelected,
        total,
      }}
    >
      {children}
    </BoletaContext.Provider>
  )
}

export const useBoletaContext = () => useContext(BoletaContext)
