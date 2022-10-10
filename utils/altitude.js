export   const config = (latitude , longitude) =>{
  return {
    method: 'get',
    url:  `https://maps.googleapis.com/maps/api/elevation/json?locations=${latitude},${longitude}&key=AIzaSyCUsIk48NWmjgHDfp_xu255cIdUnGOpu54`,
    headers: { }
  };
}