function Exercise({ children, title }) {
    return (
        <div className="exercise">
            {title && <h3>{title}</h3>}
            {children}
        </div>
    )
}

export default Exercise;