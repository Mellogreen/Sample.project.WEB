           
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


//==============================================================================================

// SIMPLE EIGHT BALL PROJECT
        
        
        let userName = "Adeniyi";
        let userQuestion = "Do i need a break?";
        let randomNumber = "";
        let eightBall = "";
    
        // Using teneary statement to check the logged user name
        userName ? console.log(`Hello, ${userName}`):console.log('Hello')

        //using teneary statement to check the and log the userquestion 
        userQuestion ? console.log(`The question asked is: ${userQuestion}`):
        console.log('What is your user name ?')

        //using this code to create a number between 0 and 8 and using math.floor to round it up to a whole number
        randomNumber = Math.floor(Math.random() * 8);
        // console.log(randomNumber)

        //Using switch statement to create multiple scenerios for each case at random number.
        switch (randomNumber){
        case 0 : console.log('It is certain');
        break;
        case 1 :
        console.log ('It is decidedly so');
        break;
        case 2 :
        console.log ('Reply hazy try again');
        break;
        case 3 : console.log ('Cannot predict now');
        break;
        case 4 : console.log('Do not count on it');
        break;
        case 5 : console.log('My sources say no');
        break;
        case 6 : console.log('Outlook not so good');
        break;
        case 7 : console.log('Signs point to yes');
        break;
        default : console.log('no information')
        break;
        }

        //======================================================================

        //Race Day Concept to allocate number

        let raceNumber = Math.floor(Math.random() * 1000);
        let raceRegistration = true;
        let runnerAge = 19;

        if( raceRegistration === true  && runnerAge > 18){
        console.log(raceNumber = raceNumber + 1000)
        }

        if( runnerAge > 18 && raceNumber >= 1000 ){
        console.log(`An adult with registration number ${raceNumber} will run at 9:30 a.m`)
        }
        else if(runnerAge > 18 && raceNumber < 1000 ){
        console.log(`An adult with registration number ${raceNumber} will run at 11:00 a.m`)
        }
        else if (runnerAge < 18){
        console.log(`Youth with registration number ${raceNumber} will run at 12:30 p.m`)
        }
        else{
        console.log(`Young adult with registration number ${raceNumber} will be run at 12:30p.m`)
        }

        //==========================================================================================
        //LOOPING THORUGH A NESTED LOOP AND PUSHINH IT INTO A NEW EMPTY ARRAY

        let bobsFollowers = ['Mankind','Tony','Segun','Kenny'];
        let tinasFollowers = ['Mankind','Ahmed','Kenny'];
        let mutualFollowers = [];
        let mutual = '';

        for(let i = 0; i < bobsFollowers.length; i++){
        for(let t = 0; t < tinasFollowers.length; t++ ){
        if( bobsFollowers[i] === tinasFollowers[t] ){
        mutual = mutual + tinasFollowers[t];

        mutualFollowers.push(tinasFollowers[t])
        }
        }
        }
        console.log(mutual)

        //=====================================================================
          //SIMPLES CONCEPT OF DECONSTRUCTING AN OBJECT OF AN ARRAY (i.e an array wrapped in an object)
        const blog = {
                title: 'My First Space Travel Blog',
                author: {
                  firstNamer: 'Rick',
                  lastNamer: 'Sanchez',
                },
                tags: ['ideas', 'notes', 'inter dimensional travel'],
              }
              
              const {
                title,
                author: {firstNamer, lastNamer},
                tags: [ideaTag, noteTag, interTag]
              } = blog
              
              console.log(blog)
              

              //=========================================================================
             // A SIMPLE CONCEPT OF DESTRUCTURING AN ARRAY OF OBJECT(i.e an object wrapped in an array )
              var friends = [
                  {
                      name: 'Rick',
                      color: 'blue'
                  },
                  {
                      name: "Morty",
                      color: 'yellow'
                  }
              ];

              //=====================================
              //METHOD OF DESTRUCTING BEFORE THE ADVENT OF ES6
              const firstColor = friends[0].color;
              const firstName = friends[0].name;
              const secondColor = friends[1].color;
              const secondName = friends[1].name;
              
              console.log(firstColor, secondName)
              //=================================
              //ANOTHER WAY OF DESTRUCTING
              let [color1 , color2] = [friends[0].color, friends[1].color];
              let [name1, name2] = [friends[0].name, friends[1].name]
              console.log(name1, color2)
              
              //=============================
              // ES 6 CONCEPT
              let [{color:firstColors} , {color:secondColors}] = friends;
              let [{name:firstNames} , {name:secondNames}] = friends;
              console.log(firstNames, firstColors)
              console.log(secondNames, secondColors)

              //need to start new hands on project
              

