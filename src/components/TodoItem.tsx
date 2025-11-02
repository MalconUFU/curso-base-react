interface ITodoItemProps {
    id: string,
    label: string,
    complete: boolean,
    onComplete(): void
    onRemove(): void
}

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {

    return (
        <div>
            <li key={id}>
                {label}

                {complete ? 'Concluído' : ''}

                {/*CONCLUIR ITEM DA LISTA*/}
                <button onClick={onComplete}>
                    Concluir
                </button>

                {/*REMOVER ITEM DA LISTA*/}
                <button onClick={onRemove}>
                    Remover
                </button>
            </li>
        </div>
    )
}