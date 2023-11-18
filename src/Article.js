import './Article.css'


function Article ({ selectedStory }) {
  return (
    <div>
      <h1>{selectedStory.title}</h1>
      <h2>{selectedStory.author}</h2>
      <img src={selectedStory.urlToImage}/>
      <p>{selectedStory.content}</p>
    </div>
  )
}

export default Article