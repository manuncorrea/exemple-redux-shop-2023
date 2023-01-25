import { ShoppingCartSimple, User } from 'phosphor-react'
import { useState } from 'react'
import { Cart } from '../Cart'
import { ContentHeader } from './styles'

export function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false)

  const handleOpenCart = () => {
    setCartIsVisible(true)
  }

  const handleCloseCart = () => {
    setCartIsVisible(false)
  }
  return (
    <>
      <ContentHeader>
        <h3>Shopping Cart</h3>

        <div>
          <User size={22} />
          <ShoppingCartSimple onClick={handleOpenCart} size={22} />
        </div>
      </ContentHeader>

      <Cart isOpen={cartIsVisible} onRequestClose={handleCloseCart} />
    </>
  )
}
