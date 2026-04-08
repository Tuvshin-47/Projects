import React from "react";


type ItemProps = {
    name: string
    isPacked: boolean
}
function Item({ name, isPacked }: ItemProps): React.ReactElement {

    return <li className="item">{isPacked ? (< del > { name }</del>): name
}</li >
}

export default function PackingList(): React.ReactElement {
    return (
        <section>
            <h1>Sally Rides Packing list</h1>
            <ul>
                <Item
                    isPacked={false}
                    name="Space suit"
                />                            <Item
                    isPacked={true}
                    name="Helmet with a golde leaf"
                />
                <Item
                    isPacked={true}
                    name="Photo of Tam"
                />

            </ul>
        </section>
    )
}