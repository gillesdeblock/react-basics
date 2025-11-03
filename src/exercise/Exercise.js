function Exercise({ children, title }) {
    return (
        <div className="flex flex-col gap-2 bg-gray-50 border p-4">
            {title && <h3 className="font-bold text-lg">{title}</h3>}
            {children}
        </div>
    )
}

export default Exercise;