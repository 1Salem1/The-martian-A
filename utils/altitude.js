import axios from "axios";


export async function  getAltitude(latitude , longitude) {
  
       var config = {
        method: 'get',
        url:  `https://maps.googleapis.com/maps/api/elevation/json?locations=${latitude},${longitude}&key=AIzaSyCUsIk48NWmjgHDfp_xu255cIdUnGOpu54`,
        headers: { }
      };
        
        axios(config)
        .then(function (response) {
           
            return response.data.results[0].elevation
   
           
        
        })
        .catch(function (error) {
            console.log(error)
        });
       
      
    
    
  
    









}