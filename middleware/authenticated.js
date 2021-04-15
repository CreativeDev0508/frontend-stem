export default function({ $strapi, redirect }) {

  // Do not run on server
  if (process.server) {
    return
  }
  const user = localStorage.getItem('user')
  if(user && !$strapi.user){
    $strapi.setUser(user)
  }
  if (!user) {
    return redirect('/')
  }
}
