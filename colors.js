const colors = [
    "salmon",
    "turquoise",
    "purple",
    "orange",
    "slateblue",
    "navy",
    "skyblue",
    "crimson",
    "goldenrod"
];
const grammar = `#JSGF V1.0; grammar colors, public <color> = ${colors.join("|",)};`;