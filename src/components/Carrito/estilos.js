const styles = {
    carrito: {
        backgroundColor: '#48962e',
        border: 'none',
        borderRadius: 5,
        color: '#fff',
        padding: '10px 15px',
        cursor: 'pointer'
    },
    
    carroContenedor: {
        position: 'relative'
    },
    listaArticulos: {
        // border: '1px solid #000',
        borderRadius: 5,
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.4)',
        backgroundColor: '#fff',
        color: '#000',
        padding: 10,
        position: 'absolute',
        right: 0,
        top: 45,
        width: 400,
    },
    ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderBottom: '1px dashed #ccc',
        paddingBottom: 5
    },
    deleteButtom: {
        border: 'none',
        backgroundColor: '#e81111',
        borderRadius: '50%',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '0.6em',
        padding: '2px 5px'
    }
}

export default styles   