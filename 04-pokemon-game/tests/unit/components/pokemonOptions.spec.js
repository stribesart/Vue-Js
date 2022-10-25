import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions"

import { pokemons } from "../mocks/pokemons.mock";

describe( 'Pokemon Option Components', () => {

  let wrapper = shallowMount( PokemonOptions )

  beforeEach(() => {
    wrapper = shallowMount( PokemonOptions, {
      props: {
        pokemons
      }
    })
  })

  test( 'debe de hacer match con en el snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })
})