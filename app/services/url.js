/**
 * Generate the url string from the template and query string
 */
export default function(query, {template, title, divider}) {
    const queryString = query.replace(' ', divider);
    const templateString = template.replace('[?]', queryString);
    return templateString;
}
