import React from "react";
import { act, screen } from "@testing-library/react";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import App from '../App';
import store from '../redux/store'
import userEvent from "@testing-library/user-event";

describe('Verifica a pagina inicial da aplicacao', () => { 
  it('Verifica se os inputs sao renderizados', () => {
    renderWithRouterAndRedux(<App/>)

    const inputs = screen.getAllByRole('textbox')
    const emailInput = inputs[0]
    const nameInput = inputs[1]

    expect(inputs.length).toBe(2)
    expect(emailInput).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
  })

  it('Verifica se os botoes sao renderizados', () => {
    renderWithRouterAndRedux(<App/>)

    const buttons = screen.getAllByRole('button')
    
    expect(buttons.length).toBe(2)

    const inputs = screen.getAllByRole('textbox')
    const emailInput = inputs[0]
    const nameInput = inputs[1]

    userEvent.type(emailInput, 'loremipsum@gmail.com')
    expect(emailInput).toHaveValue('loremipsum@gmail.com')
    expect(buttons[0]).toBeDisabled()

    userEvent.type(nameInput, 'Joaozinho')
    expect(nameInput).toHaveValue('Joaozinho')
    expect(buttons[0]).not.toBeDisabled()
  })

  it('Verifica se ao clicar no botao "Play" é redirecionada para a pagina "Games"' , () => {
    const {history} = renderWithRouterAndRedux(<App/>)
    const buttons = screen.getAllByRole('button')
    
    expect(buttons.length).toBe(2)

    const inputs = screen.getAllByRole('textbox')
    const emailInput = inputs[0]
    const nameInput = inputs[1]

    userEvent.type(emailInput, 'loremipsum@gmail.com')

    userEvent.type(nameInput, 'Joaozinho')

    userEvent.click(buttons[0])

    const route = history.location.pathname

    expect(route).toBe('/games')
  })

  it('Verifica se ao clicar no botao "settings" é redirecionada para a pagina "settings"' , () => {
    const {history} = renderWithRouterAndRedux(<App/>)
    const buttons = screen.getAllByRole('button')
    
    expect(buttons.length).toBe(2)

    const inputs = screen.getAllByRole('textbox')
    const emailInput = inputs[0]
    const nameInput = inputs[1]

    userEvent.type(emailInput, 'loremipsum@gmail.com')

    userEvent.type(nameInput, 'Joaozinho')

    userEvent.click(buttons[1])

    const route = history.location.pathname

    expect(route).toBe('/settings')
  })

 })