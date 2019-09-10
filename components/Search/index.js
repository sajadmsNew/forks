import React from 'react';
import useForm from 'react-hook-form';
import { Tag, Form, Label, Input, Error, Add } from './styles';
import { Card } from '../Card';
import { TournamentAPI } from '../../services/tournamentsAPI';
import { useStateValue } from '../../states/tournaments';

export const Search = () => {
  const { register, handleSubmit, errors, setError } = useForm();
  const [{ theme }, dispatch] = useStateValue();

  const onSubmit = ({tournamentid}) => {
    TournamentAPI.GET(tournamentid).then((response) => {
      console.log(response);
      if(response.error) {
        setError("tournamentid", "notFound", response.error);
      } else {
        dispatch({
          type: 'ADD',
          newTournament: response
        })
      }
    });
  };

  return (
    <Tag>
      <Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input name="tournamentid" ref={register({ 
            required: {
              value: true,
              message: "Please enter a valid Tournament ID"
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter a valid Tournament ID"
            } 
            })} id="search-input" />
          { errors.tournamentid && (
            <Error>
              {errors.tournamentid.message}
            </Error>
          ) }
          <Label htmlFor="search-input">
            Tournament ID
          </Label>
          <Add type="submit">
            Add
          </Add>
        </Form>
      </Card>
    </Tag>
  );
}