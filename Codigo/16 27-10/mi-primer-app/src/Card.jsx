

function Card ({nombre,fechaNacimiento,clubes,cromo,late}){
return(
<div>
<h1 style={{backgroundColor:"blue"}}>
    {nombre}
    </h1>
<p>{fechaNacimiento}</p>
<p>{clubes}</p>
<small>{cromo?'esta figurita es cromoπβ ':"no es un cromo π¬β"}</small>
<small>{late?"late βοΈββ ":"nola βββ"}</small>
</div>
)
}

export default Card;