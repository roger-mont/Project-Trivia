import React from "react";
import Feedback from "../Pages/Feedback";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { act, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('', () => {
  it('Verifica se ao clicar no botao "play again", o jogador é redirecionado a pagina inicial', () => {
    const {history } = renderWithRouterAndRedux(<App/>)
    act(() => {
      history.push('/feedback')
    })
    const playAgainBtn = screen.getByRole('button', {
      name: /play again/i
    })

    userEvent.click(playAgainBtn)
    const pathname = history.location.pathname
    expect(pathname).toBe('/')
  });

  it('Verifica se ao clicar no botao "Ranking", o jogador é redirecionado a tela de ranking', () => {
    const {history } = renderWithRouterAndRedux(<App/>)
    act(() => {
      history.push('/feedback')
    })

    const rankingBtn = screen.getByRole('button', {
      name: /ranking/i
    })

    userEvent.click(rankingBtn)
    const pathname = history.location.pathname
    expect(pathname).toBe('/ranking')

  })
});