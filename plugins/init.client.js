export default function({ $strapi, redirect ,route }) {

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if(user && !$strapi.user){ 
      $strapi.setUser(user)
      return
    }
    if (!user && route.path != '/register') {
      return redirect('/')
    }
  }
  