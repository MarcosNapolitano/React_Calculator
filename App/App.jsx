import React from 'react'

//falta poner boton de borrar y que las cuentas de periodico no den "max digits reached"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        number1:"",
        number2:"",
        result: "0",
        display:" ",
        operator: "",
        reboot: false

        };
        this.handleClick = this.handleClick.bind(this);
        this.handlePress = this.handlePress.bind(this);
        this.reset = this.reset.bind(this);

        
    };

    componentDidMount() {
        document.addEventListener("keydown", this.handlePress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handlePress);
    }

    checkReboot(){
        return this.state.reboot
    }

    handleClick(event){

        //hago un mini objeto que simula el evento de keyboard
        //el charcode me da el Keycode segun el ID de la tecla
        const event2 = {keyCode: event.target.id[1].charCodeAt(),
                       key: event.target.id[1]}
        if(event2.key=="X"){
            event2.key="*"
            event2.keyCode=43
        }

        if(event2.key=="="){
            event2.key="enter"
            event2.keyCode=13
        }
        //esto hace q el foco de enter vaya al igual, sino se quedaria en el elemento clickeado
        document.getElementById("N=").focus()

        this.handlePress(event2)
    }

    handlePress(event){

        
        const oper = [111,106,107,109,42,43,47]
        let numero1 = this.state.number1
        let numero2 = this.state.number2
        let operador = this.state.operator

        if(numero1.length>15||numero2.length>15){
            this.setState({result:"Max Digits Reached"})
            return undefined
        }
        //if number
        //estos son los rangos de keycode numericos, no puedo no repetir, no funciona
        if((96<=event.keyCode && event.keyCode<=105) || 
           (42<=event.keyCode && event.keyCode<= 57) || event.keyCode==110){
            
            //si se hace un enter y luego numero, resetea la cuenta
            if(this.checkReboot()){

                numero1  = ""
                numero2  = ""
                operador = ""
                this.setState({number1: "", operator:"", number2:"", 
                               result:"0",display:"", reboot: false})

            }

            let num1 = numero1
            //prevents double decimal point
            console.log(event.keyCode)
            if((event.keyCode==110 || event.keyCode==46) && numero1.split("").includes(".")){
                num1 = num1
            }else{
                num1 += event.key
            }

            //separa en numero 1 y 2 por antes o despues del operador
            if(operador==""){
                this.setState({display: num1, result:num1, number1:num1});

            }else{
                let num2 = numero2
                if((event.keyCode==110 || event.keyCode==46) && numero2.split("").includes(".")){
                    num2 = num2
                }else{
                    num2 += event.key
                    this.setState({display: numero1 + operador, 
                                result: num2, number2: num2 })
                }
            }
            this.orangize(event)

        }

        //if operator
        if(oper.includes(event.keyCode)){
            //to negate numbers
            if(event.keyCode==109 && operador!="" && numero2==""){
                if(!operador.includes(" -")){

                    operador += " -" 
                }
            }else{
                operador = event.key

            }
            this.setState({operator:operador, result:operador})

            //operate on the result
            if(this.checkReboot()){
                numero2 = ""
                this.setState({display: numero1, reboot:false, number2:""})
            }
            //keep operating result if operator is pushed several times
            if(numero2!=""){
                //si no lo hago como string, despues tira error cuando chequea
                //por doble decimal
                const result = eval(numero1 + operador + numero2).toString()
                
                this.setState({display: result, number1:result, number2:""})
            }
            this.orangize(event)

        }
        
        //if enter
        if(event.keyCode==13){
            this.calculate(numero1, operador, numero2)
            this.orangize(event)
        }

    }

    calculate(num1, oper, num2){

        const result = eval(num1 + oper + num2).toString()

        //para q la proxima q ingreses un numero resetee, si viene de un enter
    
        if(!this.checkReboot()){
            this.setState({reboot:true})
        }
        
        this.setState({number1:result, result: result,
                       display:num1 + oper + num2+" ="});
        
    }

    reset(){
        this.setState({number1:"",
                       number2:"",
                       result: "0",
                       display:" ",
                       operator: "",
                       reboot: false})

        //sino el foco se queda en el AC
        document.getElementById("N=").focus()
        return undefined

       
    }
    
    //making the buttons go orange
    orangize(event){

        let letra = event.key
        if(letra=="Enter"){
            letra = "="
        }

        if(letra=="*"){
            letra = "X"
        }
        var a = document.getElementById("N"+letra)
        a.className = "drum-pad_active"
        setTimeout(()=>{a.className = ""},100)
    
    }

    render() {
        return (
            <div id="calculator">
                <div id='display-panel'>
                    {/* pre keep spaces when display inits " " */}
                    <pre><h2 id='display'>{this.state.display}</h2></pre>
                    <h2 id='result'>{this.state.result}</h2>
                </div>
                <div id="botonera">
                    <Button id = "AC" click={this.reset}/>
                    <Button id = "/" click={this.handleClick}/>
                    <Button id = "X" click={this.handleClick}/>
                    <Button id = "7" click={this.handleClick}/>
                    <Button id = "8" click={this.handleClick}/>
                    <Button id = "9" click={this.handleClick}/>
                    <Button id = "-" click={this.handleClick}/>
                    <Button id = "4" click={this.handleClick}/>
                    <Button id = "5" click={this.handleClick}/>
                    <Button id = "6" click={this.handleClick}/>
                    <Button id = "+" click={this.handleClick}/>
                    <Button id = "1" click={this.handleClick}/>
                    <Button id = "2" click={this.handleClick}/>
                    <Button id = "3" click={this.handleClick}/>
                    <Button id = "=" click={this.handleClick}/>
                    <Button id = "0" click={this.handleClick}/>
                    <Button id = "." click={this.handleClick}/>
                </div>
            </div>
        );
    }
};

class Button extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <button 
            // id can't start with number or = in css 
            id={"N" + this.props.id}
            type="button" 
            value={this.props.id} 
            onClick={this.props.click}
            className="drum-pad">{this.props.id}</button>
      );
    }
  };

export default App