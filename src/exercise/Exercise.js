function Exercise({ children, title }) {
    return (
        <div className="flex flex-col gap-2">
            {title && <h3 class="font-bold text-lg">{title}</h3>}
            {children}
        </div>
    )
}

export default Exercise;