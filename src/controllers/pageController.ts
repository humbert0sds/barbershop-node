import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
import { cortes } from '../models/pet'

export const home = (req: Request, res: Response) => {
    let list = cortes.getAll();

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
    let list = cortes.getFromType('cortesCurtos');

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
    let list = cortes.getFromType('cortesMedios');

    res.render('pages/page', {
        menu: createMenuObject('cortesMedios'),
        banner: {
            title: 'Cortes médios',
            background: 'banner4.png'
        },
        list
    })
} 