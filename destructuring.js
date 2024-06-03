{
    let [x,y] = [1,2];
    [x,y] = [x+1,y+1];
    [x,y]=[y,x];
    console.log([x,y]);
}

{
    // Convert [x,y] coordinates to [r, theta] polr coordinates
    function toPolar(x, y) {
        return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
    }

    // Convert polar to Cartesian coordinates
    function toCartesian(r, theta) {
        return [r*Math.cos(theta), r*Math.sin(theta)];
    }

    let [r, theta] = toPolar(1.0, 1.0);
    let [x, y] = toCartesian(r, theta);
    console.log([r, theta]);
    console.log([x, y]);
}

{
    // Collect all unused or remaining values into a single variable then destucturing
    let [x, y, ...z] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(z);
}

{
    // Destructuring other types
    let [first, ...rest] = "Hello";
    console.log(rest);

    // object
    let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0};
    let {r, g, b} = transparent;
    console.log(r, g, b);
}





