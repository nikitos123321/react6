import style from './Catalog.module.css'
import { Card } from '../CardComponent/Card'
import { Category } from '../CategoryComponent/CategoryComponent'
import { products } from '../../data/data'


export function Catalog() {
    return (
        <>
            <div className={style.catalog}>
                <p className={style.catalog_title}>Каталог товаров</p>
                <div className={style.categories}>
                    <p className={style.p}>Категории:</p>
                    <Category />
                </div>
            </div>
            <div className={style.catalog_grid}>
                {
                    products.map((product) => {
                        return (
                            <Card {...product} />
                        )
                    })
                }
            </div>
        </>
    )
}