import {Item} from "../../../types/Item.model.ts";
import React, {useState} from "react";
import EditModal from "../Modals/EditModal.tsx";
import useKeyboard from "../../../hooks/useKeyboard.tsx";

enum Desktop {
    PARENT = "item-component px-4 py-2 text-zinc-50 text-2xl rounded-md shadow-md bg-gradient-to-br from-indigo-700 to-blue-700 cursor-pointer w-60"
}

function Helper({item}: { item: Item }): JSX.Element {

    const [isActive, setIsActive] = useState(false);
    const open = (): void => setIsActive(true);
    const close = (): void => setIsActive(false);
    useKeyboard("Escape", close);

    return (
        <div onClick={open} key={item.name} className={Desktop.PARENT}>
            <h2 className={"whitespace-nowrap font-bold"}>{item.name}</h2>
            <h3 className={"font-mono text-"}>{`$${item.amount?.toFixed(2)}`}</h3>
            {isActive && <EditModal handleClose={close} item={item}/>}
        </div>
    );
}

Helper.displayName = "Item Component";
const ItemComponent = React.memo(Helper);
export default ItemComponent;