function mergeSettings(savedSettingsJSON, defaultSettings) {
    const savedSettings = JSON.parse(savedSettingsJSON);
    const merged = {};
    for (let key in defaultSettings) {
        merged[key] = defaultSettings[key];
    }
    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }
    return {
        mergedObject: merged,
        mergedJSON: JSON.stringify(merged)
    };
}
const defaults = { theme: "light", fontSize: 14, showSidebar: true };
const savedJSON = '{"fontSize":16,"showSidebar":false}';

const result = mergeSettings(savedJSON, defaults);
console.log(result.mergedObject);
console.log(result.mergedJSON);