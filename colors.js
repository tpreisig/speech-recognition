const colors = [
    "salmon",
    "crimson",
    "orange",
    "purple",
    "navy",
    "slateblue",
    "teal",
    "olive",
    "turquoise",
    "skyblue",
];
const grammar = `#JSGF V1.0; grammar colors, public <color> = ${colors.join("|",)};`;