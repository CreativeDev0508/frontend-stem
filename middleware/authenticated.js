export default function({ $strapi, redirect,route }) {
    if(!$strapi.user){ 
      redirect('/')
    }
  }
  