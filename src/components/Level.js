import React, { Component } from 'react'
import '../App.css'

export default class Level extends Component {

    // définition du constructeur de la classe parente et initialisation de l'étage.
    constructor(props) {
        super(props)

        this.state = {
            level: 0,
        }
    }

    // Méthodes d'incrémentation et décrémentation des étages.
    goUp = () => {
        // Teste de l'état de level 'si inférieur à 10' on continue d'incrémenter.
        if(this.state.level < 10){
            this.setState({ level: this.state.level + 1, message: null })
        }
        else{
            this.setState({ message: ' - This is the last level up' })
        }

    }

    goDown = () => {
        // Teste de l'état de level 'si supérieur à -2' on continue de décrémenter.
        if (this.state.level > -2){
            this.setState({ level: this.state.level - 1, message: null })
        }
        else{
            this.setState({ message : ' - This is the last level down' })
        }

    }

    // Rendu des boutons et du numéro de l'étage sélectionné.
    render() {
        return (
            <div className={'buttomLevelDiv'}>
                {this.state.level}{this.state.message}
                <br/>
                <button onClick={this.goUp}>Go UP</button>
                <button onClick={this.goDown}>Go Down</button>
            </div>
        )
    }
}


