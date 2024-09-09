import React from "react";

//deklarasi state
//State digunakan untuk menyimpan kondisi saat ini untuk komponen, 
//sementara props digunakan untuk mengirimkan informasi ke komponen lain

export default class FormLogin extends React.Component {

    constructor() {
        super()
        this.state = {
            username: "Klaudius Waditra Pradnya",
            age: 20,
            car: ["kijang inova", "raize"],
            emailUser: "",
            passwordUser: ""
        }
    }

    getUsername() {
        return this.state.username
    }

    getEmail() {
        return this.state.emailUser
    }
    getPass() {
        return this.state.passwordUser
    }

    changeUsername = () => {
        console.log("terpanggil")

        let collectionCar = this.state.car
        collectionCar.push('Karimun')

        this.setState({
            car: collectionCar
        })

    }

    handleInputForm = (e) => {
        e.preventDefault();
        console.log('berhasil');
        this.setState({
            emailUser: e.target.email.value
        })
    }

    handleInputEmail = (e) => {
        console.log(e.target.value);
        // this.setState({
        //     emailUser: e.target.value
        // })
    }

    render() {
        return (
            <>
                {/* <h1>halo</h1>
                <h3>{this.getUsername()}</h3>
                <h3>{this.state.age}</h3>
                <ul>
                    {
                        this.state.car.map(el => ( //{} digunakan untuk javascript - () akan di render
                            <li>{el}</li>
                        ))
                    }
                </ul>
                <button onClick={this.changeUsername}>Berubah</button> */}

                <form onSubmit={e => this.handleInputForm(e)}>
                    <div className="container my-4 form-control p-3 border-0 shadow-sm">
                        <div className="form-floating mt-3">
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={e => this.handleInputEmail(e)} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={e => this.setState({passwordUser: e.target.value})} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-floating mt-3">
                            <button id="submit" type="submit" className="btn btn-success w-100">SUBMIT</button>
                        </div>
                    </div>
                </form>
                <h3>{this.getEmail()}</h3>
                <h3>{this.getPass()}</h3>
            </>
        )
    }
}