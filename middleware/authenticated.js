export default function ({ $strapi, redirect }) {
    if ($strapi.user) {
      redirect('/exam')
    }
  }