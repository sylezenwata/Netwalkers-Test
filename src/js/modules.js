
/**
 * function to query select elements
 * @returns Node
 */
export const $ = document.querySelectorAll.bind(document);

/**
 * function to toggle accordion
 * @param {Node|String} element 
 */
export function toggleAccordion(element) {
    // check if el is a string the querySelect
    if ('string' === typeof element) {
        element = $(element) && $(element)[0];
    }
    // validate if el exists
    if (!element) {
        return;
    }
    // toggle accordion
    let dataSideActive = JSON.parse(element.dataset.sideActive);
    element.dataset.sideActive = !dataSideActive;
    element.classList.toggle('active');
}