// date logic

let staticYear = document.querySelector('.year');

const date = new Date().getFullYear();

staticYear.innerHTML = date;

// get select value



let select = document.querySelector("#shapes")

function switchUnit() {
    let selectUnitvalue = document.querySelector('.unitselector').value
    let unitTypeDisplay = document.querySelector('.unittype')
    // alert(selectUnitvalue)
    if (selectUnitvalue === 'metre') {
        unitTypeDisplay.innerHTML = 'm'
    } else {
        unitTypeDisplay.innerHTML = 'cm'
    }
}

function squareAreaFunc() {
    let squareInput = document.querySelector('.squareInput').value
    if (squareInput !== '') {
        let areaOfSquare = squareInput * squareInput
        // alert(areaOfSquare)
        document.querySelector('.result-value').innerHTML = areaOfSquare
    } else {
        alert('square length input field cannot be empty!!!')
    }
}

function rectangleAreaFunc(){
    let rectangleLengthValue = document.querySelector('.rectangleLength').value
    let RectangleBreadthValue = document.querySelector('.RectangleBreadth').value

    if(rectangleLengthValue !== '' && RectangleBreadthValue !== ''){
        let areaOfRectangle = rectangleLengthValue * RectangleBreadthValue
        //   alert(areaOfRectangle)
        document.querySelector('.result-value').innerHTML = areaOfRectangle
    }else{
        alert('none of the below field can be left empty!!!')
    }
}

function triangleAreaFunc() {
    let triangleBaseValue = document.querySelector('.triangleBase').value
    let triangleHeightValue = document.querySelector('.triangleHeight').value

    if(triangleBaseValue !== '' && triangleHeightValue !== ''){
        let AreaOfTriangle = 0.5 * triangleBaseValue * triangleHeightValue
        //   alert(areaofTriangle)
        document.querySelector('.result-value').innerHTML = AreaOfTriangle
    }else{
        alert('none of the below field can be left empty!!!')
    }
}

function circleAreaFunc(){
    let circleRadius = document.querySelector('.circleRadius').value

    if(circleRadius !==  ''){
        let areaOfCircle = Math.PI * circleRadius * circleRadius
        //   alert(areaOfCircle)
        document.querySelector('.result-value').innerHTML = areaOfCircle.toFixed(2)
    }else{
        alert('circle radius field cannot be empty!!!')
    }
}

select.addEventListener('change', function () {
    let selectValue = document.querySelector("#shapes").value

    let display = document.querySelector('.container')

    if (selectValue === "square") {

        display.style.display = 'flex'

        display.innerHTML = `<h2 class="title">Square</h2>
        <input type="number" name="" class="squareInput input" placeholder="enter length of square">
        <p class="unitholder">select unit</p>
        <select name="unit" id="unit" class="unitselector">
            <option value="select option">select option</option>
            <option value="metre">metre</option>
            <option value="centimetre">centimetre</option>
        </select>
        <button class="submit">Find Area</button>
        <h3 class="result">Area = <span class="result-value">0</span> <span class="unittype">--</span> <sup>2</sup></h3>`

        let selectUnit = document.querySelector('.unitselector')

        selectUnit.addEventListener('change', switchUnit)

        let submitBtn = document.querySelector('.submit')

        submitBtn.addEventListener('click', squareAreaFunc)
    }else if(selectValue === 'rectangle'){
        display.style.display = 'flex'

        display.innerHTML = `<h2 class="title">Rectangle</h2>
        <input type="number" name="" class="rectangleLength input" placeholder="enter length of rectangle">
        <input type="number" name="" class="RectangleBreadth input" placeholder="enter breadth of rectangle">
        <p class="unitholder">select unit</p>
        <select name="unit" id="unit" class="unitselector">
            <option value="select option">select option</option>
            <option value="metre">metre</option>
            <option value="centimetre">centimetre</option>
        </select>
        <button class="submit">Find Area</button>
        <h3 class="result">Area = <span class="result-value">0</span> <span class="unittype">--</span> <sup>2</sup></h3>`

        let selectUnit = document.querySelector('.unitselector')

        selectUnit.addEventListener('change', switchUnit)

        let submitBtn = document.querySelector('.submit')

        submitBtn.addEventListener('click', rectangleAreaFunc)
    }else if(selectValue === 'triangle'){
        display.style.display = 'flex'

        display.innerHTML = `<h2 class="title">Triangle</h2>
        <input type="number" name="" class="triangleBase input" placeholder="enter base of triangle">
        <input type="number" name="" class="triangleHeight input" placeholder="enter length of triangle">
        <p class="unitholder">select unit</p>
        <select name="unit" id="unit" class="unitselector">
            <option value="select option">select option</option>
            <option value="metre">metre</option>
            <option value="centimetre">centimetre</option>
        </select>
        <button class="submit">Find Area</button>
        <h3 class="result">Area = <span class="result-value">0</span> <span class="unittype">--</span> <sup>2</sup></h3>`

        let selectUnit = document.querySelector('.unitselector')

        selectUnit.addEventListener('change', switchUnit)

        let submitBtn = document.querySelector('.submit')

        submitBtn.addEventListener('click', triangleAreaFunc)
    }else if(selectValue === 'circle'){
        display.style.display = 'flex'

        display.innerHTML = `<h2 class="title">Circle</h2>
        <input type="number" name="" class="circleRadius input" placeholder="enter radius of cirle">
        <p class="unitholder">select unit</p>
        <select name="unit" id="unit" class="unitselector">
            <option value="select option">select option</option>
            <option value="metre">metre</option>
            <option value="centimetre">centimetre</option>
        </select>
        <button class="submit">Find Area</button>
        <h3 class="result">Area = <span class="result-value">0</span> <span class="unittype">--</span> <sup>2</sup></h3>`

        let selectUnit = document.querySelector('.unitselector')

        selectUnit.addEventListener('change', switchUnit)

        let submitBtn = document.querySelector('.submit')

        submitBtn.addEventListener('click', circleAreaFunc)
    }else{
        display.style.display = 'none'
    }
})