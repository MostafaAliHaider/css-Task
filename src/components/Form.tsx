import React from 'react'

const Form = () => {
  return (
    <section>
    <form>
            <div className="title">
                <label htmlFor="title">Title</label>
                
                <input type="text" name="title" id="title"/>
            </div>
        <div className="content">
            <label htmlFor="content">Content</label>
            
            <textarea name="content" id="content" cols="30" rows="10"></textarea>
        </div>
        <div className="bigBtn-container">
            <button>Add</button>
        </div>
    </form>
  </section>
  )
}

export default Form