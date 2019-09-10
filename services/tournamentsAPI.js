import axios from 'axios';
import moment from 'moment';
import { Leagues } from '@data/leagues';
import { Results } from '@data/results';
import { Contestants } from '@data/contestants';

export const TournamentAPI = {
    async GET(code) {
      try {
      // const leagues = await axios.get(`https://api.eslgaming.com/play/v1/leagues/${code}`);
      // const results = await axios.get(`https://api.eslgaming.com/play/v1/leagues/${code}/results`);
      // const contestants = await axios.get(`https://api.eslgaming.com/play/v1/leagues/${code}/contestants`);
      const leagues = Leagues;
      const results = Results;
      const contestants = Contestants;
      let data = {};

      if(leagues.error) {
        data.message = leagues.error.message;
      } else {
        const date = moment(leagues.timeline.inProgress.begin).format('Do MMM YYYY');
        const resultsList = results.map(item => {
          return {
            time: moment(item.beginAt).format('hh:mm'),
            teams: item.participants.map(part => {
              return {
                status: part.place,
                name: (part.id !== 0) ? contestants.filter(cont => cont.id === part.id)[0].name : '',
                score: (part.points) ? part.points.reduce((total, newValue) => total + newValue) : 0
              }
            })
          };
        });
        
        data = {
          title: leagues.name.short,
          date,
          results: resultsList
        }

      }

      return data;
      } catch (e) {
        console.log(e);
      }
    }
};