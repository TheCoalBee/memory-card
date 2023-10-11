import React from 'react'
import {useState} from 'react'

export default function Card({id, src, onClick}) {

    return (
        <>
            <img 
                className={"card"} 
                src={src} 
                onClick={() => onClick(id)}/>
        </>
    )
}
