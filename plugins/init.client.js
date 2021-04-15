export default function({ $strapi, redirect }) {

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if(user && !$strapi.user){
      
      $strapi.setUser(user)
    }
    if (!user) {
      return redirect('/')
    }
  }
  