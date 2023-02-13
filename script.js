class Pump {
    constructor(dataCommandDisplay){
        this.dataCommandDisplay = dataCommandDisplay
        this.clear();
    }

            // FUNCTIONS FOR THE COMMAND INTERFACE
    clear = () =>{
        this.dataCommandDisplay = '';
        dataLitre.innerText = '0'
        dataNaira.innerText = '0'
    }

    appendNumber = (number) =>{
        this.dataCommandDisplay = this.dataCommandDisplay.toString() + number.toString()
        
    }

    updateDisplay = () =>{
        dataCommandDisplay.innerText = this.dataCommandDisplay
    }

    delete = () => {
        this.dataCommandDisplay = this.dataCommandDisplay.toString().slice(0, -1)
    }

            // FUNCTIONS FOR THE MAIN(TOP) SCREEN. I.E LITRE AND NAIRA

                                // NAIRA
    start = () => {
        setInterval(() => {
            if (priceCount < this.dataCommandDisplay) {
                priceCount ++;
                dataNaira.innerText = priceCount
            }
        }, 10);
    }


                            // LITRE
    litre = () => {
        setInterval(() => {
            if (priceCount < this.dataCommandDisplay) {
                litreCount += 0.1;
                dataLitre.innerText = litreCount.toFixed(1);
            }
        }, 299.99);
    }

}


// -----VARIABLES FOR THE TIMER----

let priceCount = 0;
let litreCount = 0;


//   ALL THE CLASS SELECTORS

const numberButtons = document.querySelectorAll('[data-numbers]');
const dataClear = document.querySelector('[data-clear]');
const dataDelete = document.querySelector('[data-delete]');
const dataStart = document.querySelector('[data-start]');
const dataNaira = document.querySelector('[data-display-naira]');
const dataLitre = document.querySelector('[data-display-litre]');
const dataCommandDisplay = document.querySelector('[data-command-display]');

const pump = new Pump(dataCommandDisplay);


    // EVENT BUTTONS LISTENERS FOR THE COMMAND INTERFACE
numberButtons.forEach(button =>{
    button.addEventListener('click', ()=> {
        pump.appendNumber(button.innerText);
        pump.updateDisplay();
    });
});

dataClear.addEventListener('click', () =>{
    pump.clear();
    pump.updateDisplay();
})

dataDelete.addEventListener('click', () =>{
    pump.delete();
    pump.updateDisplay();
})

dataStart.addEventListener('click', () =>{
    pump.start();
    pump.litre();
})  