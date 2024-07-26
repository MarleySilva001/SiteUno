import Button from './Button';
import style from './BuyBox.module.css'

export default function BuyBox({ img, preco, nome, descricao }) {
    return (
        <>
            <div className={style.row}>
                <div>
                    <img src={img} alt={img.name} />
                </div>
                <div className={style.column}>
                    <p>
                        {nome}
                    </p>
                    <p>
                        R$<span>{preco}</span>
                    </p>
                    <p>{descricao}</p>
                    <Button titulo={'Comprar agora'} />
                </div>
            </div>
        </>
    )
}