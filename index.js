const mediaData = [
    {
        id: 1,
        title: "Stranger Scrims",
        duration: 40,
        tags: ["supernatural", "horror", "drama"],
    },
    {
        id: 2,
        title: "The Scrim of the Dragon",
        duration: 60,
        tags: ["drama", "fantasy"],
    },
    {
        id: 3,
        title: "Scrim Hunters",
        duration: 22,
        tags: ["reality", "home improvement"],
    },
    {
        id: 4,
        title: "This Old Scrim",
        duration: 30,
        tags: ["reality", "home improvement"],
    },
    {
        id: 5,
        title: "What We Do in the Scrim",
        duration: 55,
        tags: ["drama", "comedy", "supernatural"],
    },
    {
        id: 6,
        title: "The Scrimdalorian",
        duration: 58,
        tags: ["fantasy", "sci-fi", "adventure"],
    },

];

function getUniqueTags(data) {
    const all_tags = data.map(item => item.tags).reduce((acc_value, current_value) => acc_value.concat(current_value), []);
    const unique_tags = Array.from(new Set(all_tags));
    return unique_tags;
}

console.log(getUniqueTags(mediaData));
