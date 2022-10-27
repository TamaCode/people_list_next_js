import styles from '../../styles/People.module.css'
import Link from 'next/link';

// Este metodo corre antes de que el componente People se renderice. (Propio de NEXT)
// No usar codigo que tendria que correr en el navegador
// Recordar que next pre-renderiza los componentes del lado del servidor
// La carga inicial de datos dentro de un componente se deberia hacer dentro de getStaticProps y no dentro de useEffect porque no estariamos aprovechando la ventaja que nos da Next de pre-renderizar del lado del server y hacer mas rapida nuestra app.

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return  {
        // props es accesible desde People como parametro
        props: {
            people: data
        }
    }
};

const People = ({ people }) => {
    return (
        <div>
            <h1>People</h1>
            {people.map(person => (
                <Link href={`/people/${person.id}`} key={person.id}>
                    <a className={styles.single}>
                        <h3>{person.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default People;