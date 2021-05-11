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
      updateQuote = async () => {
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

    async componentDidMount(){
        this.updateQuote()

    }
    
    render() {
        return (
            <div>
                <div className="quotes-container">
                    <div>"{this.state.message}"</div>
                    {<div>-- {this.state.name == undefined ? "Anonymous" : this.state.name}</div>} 
                    <button onClick={this.updateQuote} className="quote-btn">New Quote</button>                   
                </div>
            </div>
        );
    }
}

export default Quotes;