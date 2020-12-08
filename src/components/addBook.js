import React, { Component } from 'react'

export default class AddBook extends Component {
   constructor() {
       super()

       this.state = {
           title: "",
           author: "",
           review: ""
       }

       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(event) {
       this.setState({ [event.target.name]: event.target.value })
   }

   handleSubmit(event) {
       event.preventDefault()

        fetch("http://127.0.0.1:5000/book/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                review: this.state.review
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
   }

   render() {
       return (
           <div className='add-book-wrapper'>
               <form onSubmit={this.handleSubmit}>
                   <input 
                        type="text"
                        name="title"
                        value={this.state.title}
                        placeholder="Title"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Author"
                        onChange={this.handleChange}
                    />
                    <textarea 
                        name="review"
                        value={this.state.review}
                        placeholder="Review"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add Book</button>
               </form>
           </div>
       )
   }
}