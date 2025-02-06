import './App.css'
import Card from './components/Card'


function App() {
  const handleCardClick = (e: React.MouseEvent<HTMLImageElement>) => console.log(e.target);

  return (
    <>
      <Card id={0} onClickEvent={handleCardClick}/>
    </>
  )
}

export default App
