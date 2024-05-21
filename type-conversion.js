// JS type conversion
/*
    undefined -> "undefined" (toString) -> NaN (toNumber) -> false (boolean)
    null -> "null" -> 0 -> false
    true -> "true" -> 1
    false -> "false" -> 0
    "" (empty string) -> "" -> 0 -> false
    "1.2" -> "1.2" -> 1.2 -> true
    "one" -> "one" -> NaN -> true
    0 -> "0" -> 0 -> false
    -0 -> "0" -> 0 -> false
    1 (finite, non-zero) -> "1" -> 1 -> true
    Infinity -> "Infinity" -> Infinity -> true
    -Infinity -> "-Infinity" -> Infinity -> true
    NaN -> "NaN" -> NaN -> false
    {} (object) -> -> -> true
    [] (empty array) -> "" -> 0 -> true
    [9] (one numeric element) -> "9" -> 9 -> true
    ['a'] (other array) -> use join() method -> NaN -> true
    function(){} -> -> NaN -> true
*/

/* 
    Number conversion
    toFixed() - converts number to a string with a specified number of digits after the decimal point
    toExponential() - converts a number to a string using exponential notation, with one digit before the decimal point and specified number of digits after the decimal point
    toPrecision() - converts a number to string with the number of significant specified digits

    let n = 123456.789
    n.toFixed(0)        => "123457"
    n.toFixed(2)        => "123456.79"
    n.toFixed(5)        => "123456.78900"
    n.toExponential(1)  => "1.2e5"
    n.toExponential(3)  => "1.235e5"
    n.toPrecision(4)    => "1.235e5"
    n.toPrecision(7)    => "123456.8"
    n.toPrecision(10)   => "123456.7890"

    Intl.NumberFormat - provides a more general, internationalized number-formatting method
*/



    