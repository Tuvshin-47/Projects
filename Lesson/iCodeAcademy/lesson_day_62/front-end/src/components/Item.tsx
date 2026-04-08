import React from "react";

type ItemProps = {
    name: string
    isPacked: boolean
}
function Item({ name, isPacked }: ItemProps): React.ReactElement {
    // Хэрвээ isPacked нь  true байвал тухайн li элемент дээрх текстийг check буюу дундуур нь
    // зурдаг css ашиглаж харуулна уу
    // if(isPacked) {
    //     return <li className="item"><del>{name}</del></li>;
    // }
    // return <li className="item">{name}</li>;

    return <li className="item">{isPacked ? (<del>{name}</del>) : name}</li>
}

export default function PackingList(): React.ReactElement {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}