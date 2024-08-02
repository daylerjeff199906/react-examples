import { listPayments } from '../utils/data'
import { useBoletaContext } from '../providers/BoletaProvider'

export const SectionPayments = () => {
  const { handlePaymentClick } = useBoletaContext()

  return (
    <div>
      <h2>Precios</h2>
      <section>
        {listPayments?.map((item, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handlePaymentClick(item)}
          >
            <p>{item.amount}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
