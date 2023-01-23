export const ratingsConverter = (rating) => {
    if (rating < 1000) {
        return rating;
    } else if (rating >= 1000 && rating < 10000) {
        return `${(rating / 1000).toFixed(1)}k`;
    } else if (rating >= 10000) {
        return `${(rating / 1000).toFixed(1)}k`;
    } else {
        return 0;
    }
}

export const ratingColor = (rating) => {
    if (rating < 2)
        return 'text-red-500';
    if (rating < 3)
        return 'text-orange-400';
    if (rating < 4)
        return 'text-yellow-400';
    if (rating > 4)
        return 'text-green-500';
}