export const TitleCase = (string) => {
    return string.split(" ").map(s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()).join(" ");
}