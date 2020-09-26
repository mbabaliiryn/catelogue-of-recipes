import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitterSquare,
  faSkype,
  faAngellist,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

function initFontAwesome() {
  library.add(
    fab,
    faTwitterSquare,
    faSkype,
    faAngellist,
    faStackOverflow,
    faFacebook,
    faLinkedin,
    faGithub,
  );
}
export default initFontAwesome;
