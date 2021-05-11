// This component will display inspirational quotes from an API 
import React, { Component } from 'react';

class Quotes extends Component {
    constructor(){
        super()
        this.state = {
            message: '',
            name: ''
        }
    }
    async componentDidMount(){
        const url = 'https://type.fit/api/quotes'
        const response = await fetch(url)
        const data = await response.json()
        const randIndex = () => Math.floor(Math.random() * 98)
        const quote = data[randIndex()].text
        const author = data[randIndex()].author

        console.log(quote)
        console.log(author)

        this.setState({
            message: quote,
            name: author
        })
    }
    render() {
        return (
            <div>
                <div className="quotes-container">
                    <div>"{this.state.message}"</div>
                    <div>-- {this.state.name}</div>
                    
                </div>
            </div>
        );
    }
}

export default Quotes;