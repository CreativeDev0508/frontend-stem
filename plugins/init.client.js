export default function({ $strapi, redirect ,route }) {

    const user = JSON.parse(localStorage.getItem('user'))
    if(user && !$strapi.user){ 
      $strapi.setUser(user)
      return
    }
  }
  