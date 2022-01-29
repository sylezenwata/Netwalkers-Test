import './styles/icons.css';
import './styles/main.css';

import { $, toggleAccordion } from './js/modules';

// get sidebar elements that requires accordion
[...$('a[data-side-active]')].forEach(el => {
    el.addEventListener('click', () => toggleAccordion(el));
});