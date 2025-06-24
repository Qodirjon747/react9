import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className='container'>
      <h1>Products</h1>
      <div className="ota">
        <Card bg="#CBCBCB" btn_bg="#A5A5A5"></Card>
        <Card bg="#5CA7FF" btn_bg="#FFC700"></Card>
        <Card bg="#D083FF" btn_bg="#00FFB2"></Card>
        <Card bg="#FF99E2" btn_bg="#FFF500"></Card>
        <Card bg="#C5C1C7" btn_bg="#00FFB2"></Card>
        <Card bg="#5CFF62" btn_bg="#FFC700"></Card>
      </div>
    </div>
  )
}

export default App