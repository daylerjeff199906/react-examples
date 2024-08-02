import { listUsers } from '../utils/data'
import { useBoletaContext } from '../providers/BoletaProvider'

export const SectionUser = () => {
  const { handleUserClick } = useBoletaContext()

  return (
    <main>
      <h1>Usuarios</h1>
      <section>
        {listUsers?.map((item, index) => (
          <div
            id="card"
            className="card"
            key={index}
            onClick={() => handleUserClick(item)}
            style={{
              cursor: 'pointer',
              padding: 10,
              margin: 5,
              border: '1px solid #',
            }}
          >
            <h2>{item.name + item?.lastName}</h2>
            <p>{item.email}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
