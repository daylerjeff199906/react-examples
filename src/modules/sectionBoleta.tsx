import { useBoletaContext } from '../providers/BoletaProvider'

export const SectionBoleta = () => {
  const { userSelected, paymentSelected, total } = useBoletaContext()

  return (
    <div>
      <section>
        <h2>Usuario seleccionado</h2>
        {userSelected && (
          <div className="">
            <h2>{userSelected.name + userSelected?.lastName}</h2>
            <p>{userSelected.email}</p>
          </div>
        )}

        <h2>Pago seleccionado</h2>
        {paymentSelected && (
          <div className="">
            <p>{paymentSelected.amount}</p>
            <p>{paymentSelected.quantity}</p>
          </div>
        )}

        <h2>Total, Paga sssinverguenza 😤</h2>
        <div className="">
          <p>$ {total}</p>
        </div>
      </section>
    </div>
  )
}
