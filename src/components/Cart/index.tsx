import { X } from 'phosphor-react'
import { ContentCart, HeaderCart } from './styles'
interface CartType {
  isOpen: boolean
  onRequestClose: () => void
}

export function Cart({ isOpen, onRequestClose }: CartType) {
  return (
    <ContentCart isOpen={isOpen} onRequestClose={onRequestClose}>
      <HeaderCart>
        <h3>Carrinho de compras</h3>
        <button className="close-button" onClick={onRequestClose}>
          <X size={24} width="bold" />
        </button>
      </HeaderCart>
    </ContentCart>
  )
}
