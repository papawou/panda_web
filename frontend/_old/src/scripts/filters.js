export const filter = (_games, _id_games, filters, _filters, setGames, setFilters, setReset) => {
    let new_games = []
    let new_filters = {}

    if (isPending(filters)) {
        setGames(_id_games)
        setFilters(_filters)
        setReset(false)
        return
    }

    for (let game of _games)
        if (isAvailable(game, filters)) {
            new_games.push(game.id)
            for (let tag of game.tags)
                if (filters[tag] != 'selected')
                    new_filters[tag] = 'pending'
                else
                    new_filters[tag] = 'selected'
        }

    for (let b_filter in _filters)
        if (!new_filters.hasOwnProperty(b_filter))
            new_filters[b_filter] = 'disabled'

    setGames(new_games)
    setFilters(new_filters)
    setReset(true)
}

const isAvailable = (game, filters) => {
    for (let filter in filters)
        if (!game.tags.includes(filter) && filters[filter] == 'selected')
            return false
    return true
}

const isPending = (filters) => {
    for (let filter in filters)
        if (filters[filter] == 'selected')
            return false
    return true
}