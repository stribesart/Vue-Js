describe( 'Example Component' , () => {
  test( 'Dede de ser mayor a 10', () => {

    //Arreglar
    let value = 10
    
    //Estimulo
    value = value +2

    //Observar el resultado
    expect( value ).toBeGreaterThan(10)

  })
})