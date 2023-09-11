// days of the week
        const DaysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const Time = new Date();
        // console.log(Time);

        const Day = Time.getDay();
        // console.log(Day);

        const currentDay = DaysOfTheWeek[Day];

         document.getElementById('currentDay').textContent = `Current Day of the Week: ${currentDay}`;



         const timeOut = new Date();
         

         const UTCMilli = timeOut.getMilliseconds();

         document.getElementById('milliSeconds').textContent = `Current UTC time in milliseconds is: ${UTCMilli}`;


