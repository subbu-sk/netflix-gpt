export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }
};

 export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

 export const BG_URL='https://assets.nflxext.com/ffe/siteui/vlv3/d44b8e7c-e52b-45bc-9568-7d009f91c9ee/web/IN-en-20250929-TRIFECTA-perspective_82a31bf9-6c15-4866-9ba4-fed503316d1d_large.jpg'

 export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"},]