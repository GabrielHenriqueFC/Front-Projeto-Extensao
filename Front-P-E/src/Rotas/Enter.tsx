
import '../Estilos/Enter.css'

export const Enter = () => {
  return (
    <div className='app-content'>
        <main>
            <div className="image-box">
                <img src="../public/imagens/logo-packids.png" alt="Pac Kids Logo" />
            </div>
            <p className="subtitle">Let’s start your English adventure <br/> today. Learning English is fun!</p>
        </main>
        <section>
            <button className="button button-primary" type="button">COMEÇAR AGORA</button>
            <button className="button button-secondary" type="button">JÁ TENHO CONTA</button>
        </section>
    </div>
  )
}

export default Enter;
