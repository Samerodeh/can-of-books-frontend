import React, { Component } from 'react'

export class BeastBooks extends Component {
    render() {
        return (
            <div>
                <h2>My Favorite Books</h2>
                {this.props.booksData.length && this.props.booksData.map((book, idx) => (
                    <div key={idx}>
                        {book.name}
                    </div>
                ))}
                      </div>
        )
    }
}

export default BeastBooks;
