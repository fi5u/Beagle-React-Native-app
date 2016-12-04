/**
 * Generate the url string from the template and query string
 */
export function generateQueryUrl(query, {template, title, divider}) {
    const queryString = query.replace(' ', divider)
    let templateString = template.replace('[?]', queryString)
    if(templateString.indexOf('https://') === -1 && templateString.indexOf('http://') === -1) {
        templateString = `http://${templateString}`
    }
    return templateString;
}
