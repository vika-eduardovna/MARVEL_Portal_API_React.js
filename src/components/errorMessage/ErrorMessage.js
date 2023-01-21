import error_img from './error.gif'
export const ErrorMessage = () => {
    return (
        <img
            style={{
                display: 'block',
                width: '200px',
                height: '200px',
                objectFit: 'contain',
                margin: '0 auto'
            }}
            src={error_img} alt="error" />
    )
}

