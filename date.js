//jshint esversion:6

exports.getDate = () => {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    return today.toLocaleDateString("pt-BR", options);
}

exports.getDay = () => {
    let today = new Date();
    let options = {
        weekday: 'long',
    };

    return today.toLocaleDateString("pt-BR", options);
}