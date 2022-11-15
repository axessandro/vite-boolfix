import { reactive } from "vue";

export const store = reactive({
    // getting url = apiURL + movieURL/showURL + apiKey + queryURL + search
    api: {
        apiURL: "https://api.themoviedb.org/3/",
        apiKey: "?api_key=fdab3894cc6eb938b48527bf601fb749",
        movieURL: "search/movie",
        showsURL: "search/tv",
        queryURL: "&query=",
        // getting top-rated api: apiURL + topURL + "&language=us-en-it&page=2"
        topURL: "top_rated",
    },
    
    movies: [],
    shows: [],

    search: "",
    loading: "false",
});