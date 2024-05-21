export function capitalizeString(string: string) {
    if (!string) return "";
    const words = string.split("-");

    return words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
}