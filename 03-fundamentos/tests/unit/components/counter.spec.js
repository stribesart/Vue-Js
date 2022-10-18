import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })

    // test('Debe hacer match con el snapshot', () => {

    //     const wrapper = shallowMount( Counter )

    //     expect( wrapper.html() ).toMatchSnapshot()

    // })

    test('h2 debe de tener el valor por defecto "Counter"', () => {
        expect( wrapper.find('h2').exists() ).toBeTruthy()
        const h2Value = wrapper.find('h2').text()
        expect( h2Value ).toBe('Counter')
    })

    test( 'el valor por defecto deve de ser 100 en el p', async () => {
        const value = wrapper.find('[data-testId="counter"]').text()

        expect( value ).toBe('100')
        
    })

    test('debe de incrementar en 1 el valor del contador', async () => {
        
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testId="counter"').text()
        expect( value ).toBe('101')
    })

    test('debe de establece el valor por defecto', () => {

        const {start} = wrapper.props()

        const value = wrapper.find('[data-testId="counter"').text()

        expect( Number(value) ).toBe(start)

    })

    test( 'debe de mostrar la prop title', () => {
        const title = 'Hola Mundo !!!!'

        const wrapper = shallowMount( Counter, {
            props: {
                title
            }
        })

        expect( wrapper.find( 'h2' ).text() ).toBe(title)
    })
})