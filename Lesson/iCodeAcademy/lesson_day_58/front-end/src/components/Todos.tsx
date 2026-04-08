// Todo functional component байна.
// Өөрсдөө нэг зураг оруулж ирээд 
// доор нь list-ээр 3 todo таск оруулаарай.
// нэг таск нь дундуураа зурагдсан байна. 
// App дотроо оруулж ирээд харуулдаг болгоорой.

export default function TodoList() {
    return (
        <ul style={{
            backgroundColor: 'black',
            color: 'pink'
        }}>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    );
}
