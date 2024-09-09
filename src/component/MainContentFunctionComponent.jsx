import { useEffect, useState } from "react"


export default function MainContentFunctionComponent() {
    const [nama, setNama] = useState()
    const handlerButton = () => {
        console.log(nama);
    }

    const [currRate, setCurrRate] = useState([])

    useEffect(() => {
        getData();
    },[]);
    const getData = async () => {
        try {
            const data = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=edf181f1cd484136b9cf45ef3e853cd1', {
                method: "GET"
            }).then(response => response.json()).catch('gagal fetch api');
            setCurrRate(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="content">
                <p>
                    In laborum aute nostrud ipsum non eiusmod. Occaecat officia cillum nisi anim Lorem aliqua culpa qui quis Lorem in veniam. Magna dolor proident veniam officia proident deserunt commodo ipsum Lorem dolore veniam voluptate amet. Nulla aliqua exercitation quis labore culpa proident reprehenderit veniam voluptate ea nulla sit sunt.
                    <br />
                    Fugiat minim laborum voluptate nisi adipisicing non. Aliquip consectetur anim qui irure officia Lorem Lorem pariatur occaecat minim velit cupidatat commodo. Irure ullamco sit voluptate elit pariatur culpa laborum consequat exercitation est ut est ad consequat. Commodo eiusmod qui occaecat consectetur irure nostrud commodo. Enim nisi amet qui consectetur veniam consectetur ut voluptate.
                    <br />
                    Incididunt quis labore duis pariatur. Enim laboris enim aliqua aliquip ex voluptate adipisicing ea. Do minim aliquip enim velit occaecat esse esse nostrud exercitation ad laboris veniam. Cillum ut reprehenderit aliqua in incididunt veniam Lorem labore quis. Non consectetur dolore esse qui quis excepteur amet quis eiusmod excepteur dolore. Fugiat voluptate anim velit laboris labore non ipsum adipisicing excepteur reprehenderit veniam esse cillum ad.
                </p>
            </div >
            <input type="text" name="" id="" onChange={e => setNama(e.target.value)} />
            <button onClick={handlerButton}>Cek Pokemon</button>
            <p>
                {
                    JSON.stringify(currRate)
                }
            </p>
        </>
    )
}