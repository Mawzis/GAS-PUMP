# GAS-PUMP
The gas pump machine can sell gas where you get to input the amount<br>
At the command interface, you input the amount ordered and hit the start button<br>
Once the start button is hit, the Amount and Litre starts to count, when the amount in the display is equials to the amount entered at the interface, it stops counting<br>

JAVASCRIPT<br>
Variables were created for the querry selectors to be able to select the buttons in the HTML and attach their functions to them <br>

There is the constructor that carriea all the functions() such as;<br>

1. The clear()  ===> This allws to clear the entire screen. i.e the command interface and the upper display screen<br>

2.The delete() ===> The delete button deletes the last number at the command interface. Assuming there's a mistake in the command numbers, the last number can be deleted<br>

3.The updateDisplay() ===> This function is to uodate the display on the command interface of the machine. Anytime a button is clicked it goes to update the display<br>

4.The appendNumber() ===> The appendNumber() converts the command display into a string and add any other string i.e number behind it in place of doing the arithmetic<br>

addition. This stringify the numbers from the buttons on the command interface and enables the addition of of numbers as a form of string  so there can be a display of multiple numbers<br>

5.the setIntervaal() was used for the counting of the litres and amount to be displayed on the display screen with the "if" statements giving the conditions on when to start and stop counting<br>

6.The eventListener() was used in makking the buttons active and also calling the functions to be performed anytime they are clicked
 
