import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

// 1 configurar los hooks

// 2 referenciamos la db de firestore

//3 funcion para mostrar todos los docs

// 4 funcion para eliminar un doc

//5 funcion para la confirmacion de swwet alert



//6 use useEffect


//7 devolvemos la vista de nuestro componente