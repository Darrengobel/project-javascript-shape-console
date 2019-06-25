switch (calc = prompt("Select R for Rectangle, C for Circle and T for Triangle")) {
    case "R":
        window.alert("You chose Rectangle");
        const rectangleLength = prompt("Value of Length of Rectangle")
        const rectangleWidth = prompt("Value of Width of Rectangle")

        const rectangleArea = rectangleWidth * rectangleLength

        console.log(`${rectangleArea} = ${rectangleWidth} * ${rectangleLength}`)
        window.alert("Answer:  " + rectangleArea)
        break;
    case "C":
        window.alert("You Chose Circle");
        const radius = prompt("Value of Radius")

        const circleArea = (Math.PI) * ((radius*radius))

        console.log(`${circleArea} = pi*(${radius})^2`)
        window.alert("Answer:  "+ circleArea)
        break;
    case "T":
        window.alert("You Chose Triangle");
        const triangleBase = prompt("Value of Base of Triangle")
        const triangleHeight= prompt("Value of Height of Triangle")

        const triangleArea = (1/2)*(triangleBase * triangleHeight)

        console.log(`${triangleArea} =(1/2)*(${triangleBase} * ${triangleHeight})`)
        window.alert("Answer:  "+ triangleArea)
}




