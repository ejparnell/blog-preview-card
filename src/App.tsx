import './App.css'

function App() {

    return (
        <main className='main'>
            <div className='card'>
                <div className='card__image'></div>
                <header className='card__header'>
                    <h1 className='card__title'>Learning</h1>
                </header>

                <p className='card__text card__text-date'>Published 21 Dec 2023</p>

                <p className='card__text card__text-heading'>HTML & CSS foundations</p>

                <p className='card__text card__text-content'>These languages are the backbone of every website, defining structure, content, and presentation.</p>

                <section className='card__author'>
                    <img
                        className='card__avatar'
                        src='/images/image-avatar.webp'
                        alt='Michelle Appleton'
                    />
                    <p className='author'>Greg Hooper</p>
                </section>
            </div>
        </main>
    )
}

export default App
