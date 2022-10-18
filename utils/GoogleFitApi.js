import GoogleFit, {Scopes} from 'react-native-google-fit';

export const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_BODY_WRITE,
      Scopes.FITNESS_BLOOD_PRESSURE_READ,
      Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
      Scopes.FITNESS_BLOOD_GLUCOSE_READ,
      Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
      Scopes.FITNESS_NUTRITION_WRITE,
      Scopes.FITNESS_SLEEP_READ,
    ],
  };


export async function GoogleFitCheck(){


    GoogleFit.checkIsAuthorized().then(() => {
        var authorized = GoogleFit.isAuthorized;
        console.log(authorized);
        if (authorized) {
            return 1
        } else {
       
          GoogleFit.authorize(options)
            .then(authResult => {
              if (authResult.success) {
              return 1
   
                // if successfully authorized, fetch data
              } else {
               return 0
              }
            })
            .catch(() => {
               return 0
            });
        }
  });


}


var today = new Date();
var lastWeekDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 8,
);



export const opt = {
    startDate: lastWeekDate.toISOString(), // required ISO8601Timestamp
    endDate: today.toISOString(), // required ISO8601Timestamp
    bucketUnit: 'DAY', // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1.
  };