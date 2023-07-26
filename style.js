           
           "Use Strinct"

           //SIMPLE CONVERSION OF KELVIN TO CELCIUS, THEN TO  FARENHIET

           // convert Kelvin to Celsius, then to Fahrenheit.
            const kelvin = 0;
            console.log(kelvin)
            //converting kelvin to celsius by subracting the value of kelvin from the value of celcius

            let celcius = kelvin - 273;
            console.log(celcius)

            //used an equation to calculate in farenhiet
            let fahrenheit = celcius *(9/5)+32;
            console.log(fahrenheit = Math.floor(fahrenheit))

            // using interpolation log the fahrenheit
            console.log(`The temprature to replace ${fahrenheit} degree fahrenheit`)




//==================================================================================================


            //GETTING ANY HUMAN AGE IN DOG YEARS

            // trying to create a variable of the dog age 

            let myAge = 33;
            let earlyYears = 2;
            earlyYears = earlyYears * 10.5;
            console.log(earlyYears)

            //  since we know the dog year span 10.5 years and has an early year of 6 and from the early year we can subract the latet year  which 2 from it and this value will be changing later.
            let laterYears = myAge - 2;
            laterYears = laterYears * 4;
            console.log(laterYears)


            //  i have stored the value of myAgeInDogYears in a variable of earlyYears

            let myAgeInDogYears = earlyYears + laterYears;
            console.log( myAgeInDogYears)

            // I just turned my name to a lower case letter using a method .toLoweCase
            console.log(myName = "ADENIYI".toLowerCase())
            console.log(`My name a ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


