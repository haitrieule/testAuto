import './App.css';
import Popup from 'reactjs-popup'
import { useState } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Input from './components/Input'

function App() {
  const [Template, setTemplate] = useState()
  const [Mail, setMail] = useState(
    {
      subject:'',
      question:'',
      name:'',
      email:'',
      deadline:'',
    })
  const Question = [
    "cau1:rewere", "cau2:rwerre"
  ]

  const [Student, setStudent] = useState(1)

  const options = [
    'template1','template2'
  ];
  const defaultQuestion = Question[0]
  const defaultOption = options[0];
  let items = []
  for (var i = 1; i <= Student; i++) {
    items.push(
      <Input ahihi={nani} name="aaa" />
    )
  }
  let name
  let email 
  let deadline

  function nani(childData){
    name= childData.name
    email=childData.email
    deadline=childData.deadline

  }
  function aaa() {
    if (Student < 5)
      setStudent(Student + 1);
    else
      alert('max 5 students');
  }
  function sendEmail(){
    
    console.log(Mail)
    console.log(Template)
    const email= Mail;
    fetch(`http://192.168.1.3:4567/${Template}?subject=${email.subject}&question=${email.question}&name=${email.name}&email=${email.email}&deadline=${email.deadline}`)
    .catch(err=>console.log(err))
  }
  function changeState(e){
      setMail(Mail=>({...Mail,
        subject:e.target.value
      }))
      setMail(Mail=>({...Mail,
        name:name, deadline:deadline, email:email
      }))
  
      console.log(Mail)
      
  }
  function changeQuestion(e){
    setMail(Mail=>({...Mail,question:e.value}))

  }
  
  function changeTemplate(e){
    setTemplate(e.value)
    console.log(Template)
  }

  
  return (
    <div className="App">
      <Popup className="popup-content" contentStyle={{}} trigger={<button> Add New Test +</button>} position="bottom center">
        <div>
          <div>Subject:</div>
          <input type="text"className="input" onChange={changeState}/>
          <div>Question:</div>
          <Dropdown options={Question} onChange={changeQuestion} value={defaultQuestion} placeholder="Select an option" />
          <div>Student Information:</div>
          <div>
            <div className="flex">
              {items.map(item => (
                <div>{item}</div>
              ))}
              <button onClick={aaa}>+</button>
            </div>
            
          </div>
          <div>Send with Invitation (choose the template):</div>
          <div>
            <Dropdown options={options} onChange={changeTemplate} value={defaultOption} placeholder="Select an option" />
          </div>
          <button>Cancel</button>
          <button onClick={sendEmail}>Invite</button>
        </div>
      </Popup>
    </div>
  );
}

export default App;
