import { useState } from "react";

interface IInputAddProps{
    onAdd(value: string): void;
}

export const InputAdd = (props: IInputAddProps) => {
    const [value, setValue] = useState('');

    const handleAdd = () =>{
        props.onAdd(value);
        setValue('')
    }

    return (
        <div>
            {/*INPUT DE UM NOVO ITEM*/}
            <input value={value} onChange={(e) => setValue(e.target.value)} />

            {/*ADICIONAR ITEM NA LISTA*/}
            <button onClick={handleAdd}> Adicionar
            </button>
        </div>
    )

}