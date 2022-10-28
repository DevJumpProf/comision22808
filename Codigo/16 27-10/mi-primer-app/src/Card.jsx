

function Card ({nombre,fechaNacimiento,clubes,cromo,late}){
return(
<div>
<h1 style={{backgroundColor:"blue"}}>
    {nombre}
    </h1>
<p>{fechaNacimiento}</p>
<p>{clubes}</p>
<small>{cromo?'esta figurita es cromo🌟​ ':"no es un cromo 😬​"}</small>
<small>{late?"late ✔️​​ ":"nola ❌​​"}</small>
</div>
)
}

export default Card;