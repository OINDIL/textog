import React, { useEffect, useState } from 'react'
function PasswordStrength(props) {
    const [progressWidth,setProgressWidth] = useState(1)
    const [inputText,setInputText] = useState('')
    const [progressColor,setProgressColor] = useState('danger')
    // console.log(progressColor)
    const handleInput = (event) =>{
        setInputText(event.target.value)
    }

    useEffect(()=>{
        let length = inputText.length
        const width = [1,25,50,75,100]
        let point = 0
        const colors = ['danger','warning','info','success']

        if(length >= 6){
            let arrayList = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
            arrayList.forEach((item)=>{
                if(item.test(inputText)){
                    point += 1
                    console.log(point);
                }
            })
        }
        setProgressWidth(width[point])
        setProgressColor(colors[point])
    },[inputText])
    
    return (
        <div>
            <section className="container">
                <main className='my-3'>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                        onChange={handleInput}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(48, 49, 52)', color:props.mode === 'light'?'rgb(48, 49, 52)':'white'}}
                        />
                        <label htmlFor="floatingInput">Check Password Strength</label>
                    </div>
                </main>
                <aside>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        <div className={`progress-bar progress-bar-striped bg-${progressColor}`} style={{width:`${progressWidth}%`}}></div>
                    </div>
                </aside>
            </section>
        </div>
    )
}

export default PasswordStrength