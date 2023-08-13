import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
export const Critiques = () => {
    const critiquesData = [
        {
            id: 0,
            name: 'Антон Долин',
            image: 'https://funik.ru/wp-content/uploads/2018/10/17478da42271207e1d86.jpg'
        },
        {
            id: 1,
            name: 'BadComedian',
            image: 'https://funik.ru/wp-content/uploads/2018/10/17478da42271207e1d86.jpg'
        },
        {
            id: 2,
            name: 'Maga',
            image: 'https://funik.ru/wp-content/uploads/2018/10/17478da42271207e1d86.jpg'
        },
    ]
    return (
        <div className="Critiques">
            {
                critiquesData.map((person, i)=> {
                    return (
                        <div className="CritiqueImage" style = {{transform:`translateX(${-10 * i}px)`}}>
                            <img src={person.image} alt="" />
                        </div>
                    )
                })
            }
            <span style = {{transform:'translateX(-10px)', width:"100%", display:'flex'}}>
                {
                    critiquesData.map((person, i)=> {
                        return (
                            <span style = {{fontSize:'.5em', display:'flex', alignItems:'center', fontWeight:'500'}}>{person.name}, </span>  
                        )
                    })
                }
            </span>
            {/* <div className="CritiqueImage" style={{ transform: "translateX(-30px)", background: '#F3F3F3' }}>
                <FiMoreHorizontal />
            </div> */}
        </div>
    )
}
