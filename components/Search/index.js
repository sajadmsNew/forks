import React from 'react';
import useForm from 'react-hook-form';
import { Tag, Form, Label, Input, Error, Add } from './styles';
import { Card } from '../Card';
import { TournamentAPI } from '../../services/tournamentsAPI';
import { useStateValue } from '../../states/tournaments';

export const Search = () => {
  const { register, handleSubmit, errors } = useForm();
  const [{ theme }, dispatch] = useStateValue();

  const onSubmit = ({tournamentid}) => {
    TournamentAPI.GET(tournamentid).then((response) => {
      dispatch({
        type: 'ADD',
        newTournament: response
      })
    });
  };

  return (
    <Tag>
      <Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input name="tournamentid" ref={register({ required: true })} id="search-input" />
          { errors.tournamentid && (
            <Error>
              Tournament ID is required.
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