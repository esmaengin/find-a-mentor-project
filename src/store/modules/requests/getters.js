export default {
    requests(state, rootGetters) {
        const coachId = rootGetters.userId;
        console.log(state.requests);
        return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(getters) {
        return getters.requests && getters.requests.length > 0;
        // en az bir istek varsa sonuç verir
    }
};