// static components
// function Teadisplay() {
//     return (
//         <>
//             <div>name:Red Label</div>
//             <div>origin:British India</div>
//             <div>description:Brooke Bond Red Label is one of Indias largest selling packaged tea brands.</div>
//         </>
//     )
// }

// export default Teadisplay;

// b dynamic component
// function Teadisplay({ name, origin, description }) {
//     return (
//         <>
//             <div>name:{name}</div>
//             <div>origin:{origin}</div>
//             <div>description:{description}</div>
//         </>
//     )
// }

// export default Teadisplay;

// c
function Teadisplay({tea}) {
    return (
        <>
            <div>name:{tea.name}</div>
            <div>origin:{tea.origin}</div>
            <div>description:{tea.description}</div>
        </>
    )
}
export default Teadisplay;
