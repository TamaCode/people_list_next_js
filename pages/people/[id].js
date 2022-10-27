// Con este metodo Next puede saber con anticipacion cuantos html files (de ruta dinamica) debe pre renderizar segun el length del array paths
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    const paths = data.map(person => {
        return {
            params: { id: person.id.toString() }
        }
    });
    return {
        paths,
        fallback: false
    }
};

// Esta funcion corre tantas veces como sea el length del array paths. Es decir una vez por person ID.
// La idea con esto es que se puedan pre renderizar 10 html files (en este caso) en donde va a haber un componente Detail en cada uno haciendo referencia a un id

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { person: data }
    }
};

const Details = ({ person }) => {
    return (
        <div>
            <h1>{person.name}</h1>
            <p>{person.email}</p>
            <p>{person.website}</p>
            <p>{person.city}</p>
        </div>
    );
}
 
export default Details;