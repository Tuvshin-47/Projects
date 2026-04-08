import React from "react";
const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
    ];
    const scientist = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        }];
    export default function List():React.ReactElement{
        const listItems = people.map((person, index)=>
            <li key={index}>{person}</li>
            );
            return <ul>{listItems}</ul>
    }

    export function Chemists() : React.ReactElement{
        const onlyChemists= scientist.filter((scientist)=>scientist.profession==="chemist");
        const listElement = onlyChemists.map((chemist, index)=>
        <li key={index}>
            <p>
                <b>{chemist.name }</b>
                {" "+chemist.profession+""}
            </p>
        </li>
        )

        return <ul>{listElement}</ul>

    }
    export function Mathematician(): React.ReactElement{
        const onlyMaths= scientist.filter((scientist)=>scientist.profession==="mathematician");
        const listElement = onlyMaths.map((mathematician, index)=>
        <li key={index}>
            <p>
                <b>{mathematician.name}</b>
                {" "+mathematician.profession+""}

            </p>
        </li>
        )
        return <ul>{listElement}</ul>
    }
    export function Physicist(): React.ReactElement{
        const onlyPhysic= scientist.filter((scientist)=> scientist.profession==="physicist");
        const listElement = onlyPhysic.map((physicist, index)=>
        <li key={index}>
            <p>
                <b>{physicist.name}</b>
                {" "+ physicist.profession+" "}
            </p>
        </li>
        )
        return <ul>{listElement}</ul>
    }
    export function Astro(): React.ReactElement{
        const onlyastro= scientist.filter((scientist)=> scientist.profession==="astrophysicist");
        const listElement = onlyastro.map((astrophysicist, index)=>
        <li key={index}>
            <p>
                <b>{astrophysicist.name}</b>
                {" "+ astrophysicist.profession+" "}
            </p>
        </li>
        )
        return <ul>{listElement}</ul>
    }