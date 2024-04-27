

export default function Button({name, handleAction}) {
    return (
        <div className=" mt-4 border border-gray-300 rounded-lg">
            <button onClick={handleAction}>{name}</button>
        </div>
    )
}