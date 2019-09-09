export const tournaments = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        tournaments: [
          ...state.tournaments,
          action.newTournament
        ]
      }
      
    default:
      return state;
  }
};