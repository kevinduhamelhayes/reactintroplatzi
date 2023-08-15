
function TodoCounter({total, completed}) {
    return(
        <h1 style={{
            color: 'white',
            textAlign: 'center',
            textShadow: '1px 1px 1px black',
            fontSize: '2em',
            margin: 0,
            padding: '0.5em',
        }}>
            Has completado {completed} de {total} TODOs
        </h1>
    );
}
export {TodoCounter};
