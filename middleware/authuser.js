export default function ({ $strapi }) {
    if (!$strapi.user) {
      $strapi.fetchUser()
    }
  }