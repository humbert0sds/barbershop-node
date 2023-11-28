import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
import { pet } from '../models/pet'

export const home = (req: Request, res: Response) => {
    let list = pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os cortes',
            background: 'banner4.png'
        },
        list
    })
}
export const cortesCurtos = (req: Request, res: Response) => {
    let list = pet.getFromType('cortesCurtos');

    res.render('pages/page', {
        menu: createMenuObject('cortesCurtos'),
        banner: {
            title: 'Cortes curtos',
            background: 'banner4.png'
        },
        list
    })
}
export const cortesMedios = (req: Request, res: Response) => {
    let list = pet.getFromType('cortesMedios');

    res.render('pages/page', {
        menu: createMenuObject('cortesMedios'),
        banner: {
            title: 'Cortes médios',
            background: 'banner4.png'
        },
        list
    })
} 